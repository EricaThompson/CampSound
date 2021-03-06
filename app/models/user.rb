# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  type            :string
#  link            :string
#  bio             :text
#  location        :text
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true

    has_many :items,
        foreign_key: :owner_id,
        class_name: :Item

    has_one_attached :user_img, dependent: true

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_image

    def ensure_image
        if !self.user_img.attached?
            require 'open-uri'
            self.user_img.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/users/new-user.png"), filename: 'default_image_name')   
        end
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
