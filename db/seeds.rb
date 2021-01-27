# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
puts 'All Users Removed!'

Item.destroy_all
puts "All Items Destroyed!"

Story.destroy_all
puts "All Stories Destroyed!"

user1 = User.create(username: 'Demo User', password: 'Password', location: 'SF', bio: 'Musing')

user2 = User.create(username: 'Rainforest Records', password: 'Password', location: 'los angeles', bio: 'engineering!')
user2.user_img.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/users/rainforest-records.jpg"), filename: 'rainforest-records')
puts "Users created!"

item1 = Item.create(
                "owner_id": user1.id,
                "title": '1',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item1.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/1.jpeg"), filename: "cover-1")
item1.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-1")

item2 = Item.create(
                "owner_id": user2.id,
                "title": '2',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rainy'
                )
item2.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/2.jpeg"), filename: "cover-2")
item2.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-2")


item3 = Item.create(
                "owner_id": user1.id,
                "title": '3',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'demo'
                )
item3.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/3.jpeg"), filename: "cover-3")
item3.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/3.mp3"), filename: "song-3")

item4 = Item.create(
                "owner_id": user2.id,
                "title": '4',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'RNYDY'
                )
item4.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/4.jpeg"), filename: "cover-4")
item4.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/4.mp3"), filename: "song-4")

item5 = Item.create(
                "owner_id": user1.id,
                "title": '5',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DMO USR'
                )
item5.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/5.jpeg"), filename: "cover-5")
item5.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/5.mp3"), filename: "song-5")

item6 = Item.create(
                "owner_id": user2.id,
                "title": '6',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rare'
                )
item6.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/6.jpeg"), filename: "cover-6")
item6.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/6.mp3"), filename: "song-6")

item7 = Item.create(
                "owner_id": user1.id,
                "title": '7',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'DU'
                )
item7.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/7.jpeg"), filename: "cover-7")
item7.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/7.mp3"), filename: "song-7")

item8 = Item.create(
                "owner_id": user2.id,
                "title": '8',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rainforest Records'
                )
item8.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/8.jpeg"), filename: "cover-8")
item8.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/8.mp3"), filename: "song-8")

item9 = Item.create(
                "owner_id": user1.id,
                "title": '9',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Demo User'
                )
item9.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/9.jpeg"), filename: "cover-9")
item9.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/1.mp3"), filename: "song-9")

item10 = Item.create(
                "owner_id": user2.id,
                "title": '10',
                "genre": 'electronic',
                "about": 'About text.',
                'released': true,
                'artist_name': 'Rainy User'
                )
item10.cover.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/10.jpeg"), filename: "cover-10")
item10.song.attach(io: open("https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/songs/2.mp3"), filename: "song-10")
puts "Items created!"

forestStory = Story.create(
                "owner_id": user2.id,
                "title": 'The Forest Through the Trees',
                "story_type": 'review',
                "text": 'You should lie down now and remember the forest, 
for it is disappearing--
no, the truth is it is gone now 
and so what details you can bring back 
might have a kind of life.

Not the one you had hoped for, but a life
--you should lie down now and remember the forest--
nonetheless, you might call it "in the forest,"
no the truth is, it is gone now,
starting somewhere near the beginning, that edge,

Or instead the first layer, the place you remember 
(not the one you had hoped for, but a life)
as if it were firm, underfoot, for that place is a sea, 
nonetheless, you might call it "in the forest,"
which we can never drift above, we were there or we were not,

No surface, skimming. And blank in life, too, 
or instead the first layer, the place you remember, 
as layers fold in time, black humus there, 
as if it were firm, underfoot, for that place is a sea, 
like a light left hand descending, always on the same keys.

The flecked birds of the forest sing behind and before 
no surface, skimming. And blank in life, too, 
sing without a music where there cannot be an order, 
as layers fold in time, black humus there, 
where wide swatches of light slice between gray trunks,

Where the air has a texture of drying moss, 
the flecked birds of the forest sing behind and before:
a musk from the mushrooms and scalloped molds. 
They sing without a music where there cannot be an order, 
though high in the dry leaves something does fall,

Nothing comes down to us here. 
Where the air has a texture of drying moss, 
(in that place where I was raised) the forest was tangled, 
a musk from the mushrooms and scalloped molds, 
tangled with brambles, soft-starred and moving, ferns

And the marred twines of cinquefoil, false strawberry, sumac--
nothing comes down to us here, 
stained. A low branch swinging above a brook 
in that place where I was raised, the forest was tangled, 
and a cave just the width of shoulder blades.

You can understand what I am doing when I think of the entry--
and the marred twines of cinquefoil, false strawberry, sumac--
as a kind of limit. Sometimes I imagine us walking there 
(. . .pokeberry, stained. A low branch swinging above a brook) 
in a place that is something like a forest.

But perhaps the other kind, where the ground is covered 
(you can understand what I am doing when I think of the entry) 
by pliant green needles, there below the piney fronds, 
a kind of limit. Sometimes I imagine us walking there. 
And quickening below lie the sharp brown blades,

The disfiguring blackness, then the bulbed phosphorescence of the roots. 
But perhaps the other kind, where the ground is covered, 
so strangely alike and yet singular, too, below
the pliant green needles, the piney fronds.
Once we were lost in the forest, so strangely alike and yet singular, too, 
but the truth is, it is, lost to us now. 

-- "The Forest" Susan Stewart',
                "summary": 'Songs about healing and hope',
                "username": 'Rainforest Records',
                )

goldStory = Story.create(
                "owner_id": user2.id,
                "title": 'Gold is in Bloom',
                "story_type": 'news',
                "summary": 'Summary of bloom news',
                "username": 'Evie Shaffer',
                "text": 'What Could This Thing With A Special Width Be?
A Drabble
by erica

It has a special width and a large, light length, which is endearing. Rarely has a special width reminded me more of the heart of a steadfast lion.

Its height is as flawless as an exemplary, truthful leaf, which has been living happily in the magical, dependable snow (pop!).

Naturally, it has all the glory of a breeze, which once loved wonderfully. There is nothing like a breeze that once loved wonderfully.

Lest not forget the damaged, damp demeanor of a dangerous depth boldly breathing.

sir likes its special width. madam likes its endearing length.

It is a beautiful love! 

-generated https://www.plot-generator.org.uk/2p6i5a3k/what-could-this-thing-with-special-width-be.html' ,
                )

pieceStory = Story.create(
                "owner_id": user1.id,
                "title": 'Piece by Piece',
                "story_type": 'review',
                "summary": 'Unreasonable People - A Futuristic Novel',
                "username": 'Rainforest',
                "text": "Unreasonable People - A Futuristic Novel
                        
                        The night of the release date changes everything for Rainforest Records, a 26-year-old musician from Los Angeles.

                        One moment, she is discussing intricacies with her straightforward friend, Demo User; the next, watching with horror as unreasonable people ignore each other.

                        She knows these people came from San Francisco but she can't prove it - at least not without some beautiful flowers.

                        The honest, optimistic woman knows that her musical life is over. She acquires some beautiful flowers and is reborn as the hero who will save the world from unreasonable people.

                        However, Rainforest finds herself troubled by her musical ideals and becomes overwhelmed with moral questions. Will her conscience allow her to do whatever is needed to stop the unreasonable people?
                            
                        -[generated with https://www.plot-generator.org.uk/?i=1utb7xnl] ",
                                        )

petalsStory = Story.create(
                "owner_id": user1.id,
                "title": 'Petals All Around',
                "story_type": 'news',
                "summary": 'Summary of Petals news',
                "username": 'Evie Shaffer',
                "text": 'Petals news',
                )


story1 = Story.create(
                "owner_id": user1.id,
                "title": 'Mostly giving',
                "story_type": 'review',
                "summary": 'Summary of story 1',
                "username": 'Demo User',
                "text": "You find so many people are unforgiving
                But you, you are mostly giving

                I like the way you give.
                You do it like live.
                I like the way you take.
                You do it like a namesake.
                I like the way you replace.
                Embrace.

                You find so many people are fighting
                But you, you are mostly exciting

                I love the way you have no hair,
                Spreading your style everywhere.
                You're like a style fountain.
                Enough zazz for a whole mountain.

                You find so many people are unforgiving
                But you, you are mostly giving

                You're the perfect person.
                You could meet a worse one.

                You find so many people are fighting
                But you, you are mostly exciting

                Giving, loving and nurturing,
                Exciting and intuitive too,
                Are the qualities of you

                You find so many people are unforgiving
                But you, you are mostly giving

                - generated: https://www.song-lyrics-generator.org.uk/1ttbnfk9/way-you-give-the-giving-loving-and-nurturing-person-song.html",
                )
story2 = Story.create(
                "owner_id": user2.id,
                "title": 'Soft Music Note Likely To Win Village Show',
                "story_type": 'news',
                "summary": 'Summary of story 2',
                "username": 'Rainforest Records',
                "text": "
                There are three friends, Rainforest Records, Demo User and Soft Note.
                The plot twist generator:
                
                1. Soft Note is an imaginary friend.

                2. The whole things is not a story but a brainwashing tool used by the government.

                3. It turns out Rainforest Records only exists in the cloud.

                4. The story is just one iteration of an infinite loop.

                5. Demo User was just using Rainforest Records for information.

                6. Demo User poisoned Rainforest Records at the beginning of the story, and it's taken the whole story to take effect.

                7. Rainforest Records was bitten by a vampire much earlier in the story but signs were delayed.

                8. The person claiming to be Soft Note is actually an imposter.

                9. Soft Note wasn't born but created in a lab.

                10. A perceived misfortune in Rainforest Records's past was actually set up to protect her.

                11. The entire story is a figment of Rainforest Records's imagination. She is actually in jail.

                12. The person we think is the villain is actually working for a bigger villain.

                13. Rainforest Records turns to the dark side.

                14. Rainforest Records is the villain.

                15. Rainforest Records is not really dead.

                16. Demo User has been in love with Rainforest Records all along.

                17. Soft Note is actually a zombie.

                https://www.plot-generator.org.uk/13a4vdgw/20-twist-ideas-for-adventures-of-rainforest-records.html
                ",
                )
story3 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 3',
                "story_type": 'review',
                "text": 'Story 3 review',
                "summary": 'Summary of story 3',
                "username": 'Demo User',
                )
story4 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 4',
                "story_type": 'news',
                "summary": 'Summary of story 4',
                "username": 'Rainforest Records',
                "text": "Galactic Smart Hunger Pangs Wars
                A Science Fiction Plot
    
                A long, long time ago in a smart, smart galaxy...

                After leaving the agile planet Pluto, a group of birds fly toward a distant speck. The speck gradually resolves into an intelligent, space library.

                Civil war strikes the galaxy, which is ruled by Spam Email, a dependable hummingbird capable of ignoring and even ghosting.

                Terrified, a necessary goldfish known as Rainforest Records flees the Empire, with her protector, Demo User.

                They head for The Emerald on the planet Mercury. When they finally arrive, a fight breaks out. User uses her smart hunger pangs to defend Rainforest.

                User and Goldfish Rainforest decide it's time to leave Mercury and steal a rocket to shoot their way out.

                They encounter a tribe of robots. User is attacked and the goldfish is captured by the robots and taken back to The Emerald.

                User must fight to save Goldfish Rainforest but when she accidentally unearths an exciting key, the entire future of the smart, agile galaxy is at stake.
                
                -generated: https://www.plot-generator.org.uk/1cqt89bn/galactic-smart-hunger-pangs-wars.html ",
                )
story5 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 5',
                "story_type": 'review',
                "text": 'Story 5 review',
                "summary": 'Summary of story 5',
                "username": 'Demo User',
                )
story6 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 6',
                "story_type": 'news',
                "text": 'Story 6 news',
                "summary": 'Summary of story 6',
                "username": 'Rainforest Records',
                )
story7 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 7',
                "story_type": 'review',
                "text": 'Story 7 review',
                "summary": 'Summary of story 7',
                "username": 'Demo User',
                )
story8 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 8',
                "story_type": 'news',
                "text": 'Story 8 news',
                "summary": 'Summary of story 8',
                "username": 'Rainforest Records',
                )

story9 = Story.create(
                "owner_id": user1.id,
                "title": 'Story 9',
                "story_type": 'review',
                "text": 'Story 9 review',
                "summary": 'Summary of story 9',
                "username": 'Demo User',
                )

story10 = Story.create(
                "owner_id": user2.id,
                "title": 'Story 10',
                "story_type": 'news',
                "text": 'Story 10 news',
                "summary": 'Summary of story 10',
                "username": 'Rainforest Records',
                )
puts "10 stories created!"
# user.user_img.attach(io: File.open("/Users/EricaThompson/Desktop/app_academy/class-home/campsound/app/assets/images/tape.png"), filename: "tape.png")


