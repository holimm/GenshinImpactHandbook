import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        menuState: false,
        selectorState: false,
        models: [
            {
            name: 'Ningguang',
            otherName: '凝光',
            type: 'Geo',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/542/904/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/ningguang-geo-character-profile-card-genshin-impact.jpg',
            content: `<i>Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.
            As a Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.
            <br> - Description from the Official Website</i>
            <br><br>Ningguang is one of the "Liyue Qixing," lethally perceptive and a sharp talker to boot. In the grand marketplace that is Liyue, Ningguang is second to none.
            <br><br>Everyone who meets Ningguang becomes awe-inspired by her exemplary insight and remarkable smarts. On top of that, her style is one of a kind.
            <br><br>She invested an astronomical amount into purchasing up huge volumes of Plaustrite, a type of rock with levitation properties. With this, she was able to build a resplendent residence in the sky above Liyue, known as the Jade Chamber.
            <br><br>Her chamber is much like Ningguang herself — beyond measure, above the masses, and draws attention from all.
            <br><br>Despite being a mogul who shakes the very foundations of business circles, she is adored by the children of Liyue like an older sister. A socialite at Yujing Terrace banquets and a connoisseur in the world of desserts, she remains Liyue's most beautiful, unsolvable enigma.`
            },
            {
            name: 'Eula',
            otherName: '',
            type: 'Cryo',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/528/201/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2021/05/eula-cryo-character-profile-card-genshin-impact.jpg',
            content: `
            <i>A rebellious descendant of the old aristocracy who is always out on the battlefield.
            As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique "vengeance."
            <br> - Description from the Official Website</i>
            <br><br>As the Captain of the Knights of Favonius Reconnaissance Company and the renowned Spindrift Knight, Eula spends most of her time out in the wild and has won much acclaim leading her team of scouts on patrol. The knights stationed in the mountains and valleys are often the target of sneak attacks from monsters, but Eula has always been able to resolve these crises by rendering swift support. She has also led proactive attacks to destroy Abyss Order strongholds time and again, nipping their nefarious plots in the bud.
            <br><br>Due to Eula's background, many contradictions surround her — she is a descendant of the Lawrence clan and is considered by the citizens of Mondstadt to be the embodiment of the blood of sinners. Despite everything, she severed ties with her clan many years ago and joined the Knights of Favonius. Yet prejudice is not so easily dispelled, and Eula has not been treated fairly. In the eyes of Mondstadt's citizens, she remains an "outsider", or even a "dangerous individual."         
            <br><br>Years of such experiences have led Eula to build an invisible shield to protect herself from unwarranted harm. The term "vengeance" is perhaps the most visible edge of this shield. Only by disregarding wild gossip and trying to accept the logic of her approach to the world can one come to understand the truth behind the complex shell of this young woman.`, 
            },
            {
            name: 'Yoimiya',
            otherName: '宵 宮',
            type: 'Pyro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/430/068/main.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/yoimiya-pyro-character-profile-card-genshin-impact.jpg',
            content: `
            <i>A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival."
            A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.
            <br> - Description from the Official Website</i>
            <br><br>A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival." She is a household name in Inazuma.
            <br><br>Various celebrations held in Inazuma City every year all have elaborate firework displays created by Yoimiya. She possesses an exuberant creativity and passion for firework displays that always leave people pleasantly surprised.
            <br><br>Yoimiya has a childlike innocence, and is often found playing simple yet timeless games with children or accompanying them to find shiny trinkets and toys. The purity of children brings her unparalleled joy.
            <br><br>She also enjoys social interaction and seizes every opportunity to talk to others. She appears to have endless anecdotes and ideas to be shared.
            <br><br>Principle and craftsmanship are Yoimiya's dearest qualities. Even though fireworks are fleeting, their blaze and warmth lives in people's hearts forever.
            <br><br>Both a moment and an eternity, these fleeting marvels are an expression of "protection" she gives to those around her.
            <br><br>It is because of everyone's involvement that the firework shows can carry on in such a beautiful manner.
            `, 
            },
            {
            name: 'Raiden Shogun',
            otherName: '雷 電 将 軍',
            type: 'Electro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/456/975/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/raiden-shogun-character-profile-card-genshin-impact.jpg',
            content: `
            <i>The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.
            With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.
            <br> - Description from the Official Website</i>
            <br><br>The undisputed supreme ruler of Inazuma.
            <br><br>Her Excellency, the Almighty Narukami Ogosho, promised the people of Inazuma an unchanging eternity to last throughout the ages.
            <br><br>After purging all sentiment with merciless lightning, the solitude of her mind became a secluded space free from mortal joys and woes...
            <br><br>Over the long years, the road to eternity has been dark and desolate, but Her Excellency the Shogun has never wavered, not even for a moment.
            <br><br>For true unchanging eternity is found only in the stillness that manifests itself when all noise is stripped away.
            `, 
            },
            {
            name: 'Yanfei',
            otherName: '烟绯',
            type: 'Pyro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/351/794/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/yanfei-pyro-character-profile-card-genshin-impact.jpg',
            content: `
            <i>A half-illuminated beast and highly-skilled legal adviser.
            She combines adherence to the legal codices and reasonable flexibility to find the perfect balance in her work. She devotes herself to protecting the fairness of contracts in Liyue with her identity as a legal adviser and her unique experience and methods.
            <br> - Description from the Official Website</i>
            <br><br>Yanfei is Liyue Harbor's top legal adviser. They say that she has memorized tens of thousands of legal codices and can skillfully apply the law in various situations. One can rest assured that she will aptly handle any legal case brought to her.
            <br><br>But this is not to say that Yanfei adheres blindly to the legal codices. Rather, she employs a degree of flexibility within the limits of the law and reason. 
            <br><br>This half-illuminated beast protects the order of Liyue in her unique, effective manner.
            <br><br>All of Liyue's residents have heard of the famed Yanfei, no matter who you ask. Of course, as is the ancient rule in the City of Contracts, one seeking legal consultation or services from Yanfei must prepare a rather hefty sum as payment.
            `, 
            },
            {
            name: 'Xiangling',
            otherName: '香菱',
            type: 'Pyro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/501/285/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/xiangling-pyro-character-profile-card-genshin-impact.jpg',
            content: `
            <i>The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.
            <br>Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.
            <br>There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.
            <br> - Description from the Official Website</i>
            <br><br>Liyue is home to two rival culinary traditions, conveniently named the "Li" and "Yue" styles. Foodies in Liyue are staunch supporters of one style or the other, and have long been embroiled in a bitter battle to prove the superiority of their style.
            <br><br>In this war waged by culinary snobs, ostentation is everything, flavor gets forgotten, and nothing is a simple matter of taste. Much to the consternation of Liyue's chefs, the Li vs. Yue debate eats up all of the region's rare cooking ingredients in the pursuit of ever-more-pretentious dishes.
            <br><br>Born into a restaurateur family, Xiangling inherited her fair share of this consternation. But she also chose to inherit the Wanmin Restaurant and become one of the few to push back against the status quo.
            <br><br>"Good food is good food, period!" Xiangling's mantra is an antidote to snobbery as she sets about creating her imaginative and unconventional dishes.
            <br><br>From a pinch of Mist Flower and a drop of Slime Condensate to a handful of unidentified flying insects and even hilichurls' wooden clubs, Xiangling is known to be somewhat adventurous with her choice of cooking ingredients.
            <br><br>Naturally, her unique approach leads to the occasional disastrous dish. But Xiangling never gives up, because of what her father has always said to her: "There are many secrets to cooking; the most important of which is passion."
            `, 
            },
            {
            name: 'Mona',
            otherName: '莫娜',
            type: 'Hydro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/343/071/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/mona-hydro-character-profile-card-genshin-impact.jpg',
            content: `
            <i>A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.
            <br>Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money.
            <br> - Description from the Official Website</i>
            <br><br>Mona is unique among astrologers — others may speak with great ostentation for money, but Mona has never done so. Nor does she dress up or mince her words, even if her results are unpleasant to hear: "You won't amount to anything even if you join the Adventurers' Guild." "You've got no chance with him. In fact, he will soon leave you" — such is the nature of her rejoinders.
            <br><br>Her blunt nature has resulted in plummeting numbers of people coming to have their fortunes told. But Mona isn't one to complain, for that just leaves her with more time for her personal research.
            <br><br>But when one speaks of research, one also speaks of the necessity of purchasing texts and research apparatus. Mona's only income comes from her contributions to The Steambird's "All Things Astrological" column. Every paycheck is spent first on her research. Books from Liyue, an astrolabe from Sumeru... all of these come with a hefty price tag, and by the time Mona regains her senses, there's only enough of her income left for her to scrape by each month.
            <br><br>"It matters not. Astrologers must rid themselves of material desires. Only by ridding oneself of clutter can one see the true world around them." So says Mona, coughing loudly all the while to cover the sound of her growling stomach.
            <br><br>Today, too, is another day Mona worries about Mora.
            `, 
            },
            {
            name: 'Hu Tao',
            otherName: '胡桃',
            type: 'Pyro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/515/472/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/Hu-Tao-character-profile-card-genshin-impact.jpg',
            content: `
            <i>Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.
            <br>She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.
            <br>Aside from this, she is also a talented poet whose many "masterpieces" have passed around Liyue's populace by word of mouth.
            <br> - Description from the Official Website</i>
            <br><br>At first glance, she appears to be a quirky and cheerful girl. No one would think that she is actually the renowned and illustrious Hu Tao.
            <br><br>Whether she is acting as the Director of the Wangsheng Funeral Parlor or as Liyue Harbor's "famous" poet, Hu Tao's nature is exceedingly eccentric. Like lightning or sparks of flame, she always comes and goes in the blink of an eye, igniting everything around her.
            <br><br>She pens poems by the oil of midnight and flits across mountains and seas by daylight. She appears at any time and at any place. From bustling streets to barren alleys, to derelict mountains and desolate peaks, in radiant and refulgent skies, or shadowed and starless night... Anything is possible — anything can become full of wonder.
            <br><br>Hu Tao is an undecipherable riddle, but people don't lament their lack of an answer. If asked, they would say, "This is the natural order of things, right? After all, no one can outrun the wind or take hold of a flame!"
            <br><br>She walks the line between life and death, shouldering responsibilities unknown to most mortals.
            <br><br>Be careful around Hu Tao, lest she leads you by the nose!
            `, 
            },
            {
            name: 'Sangonomiya Kokomi',
            otherName: '珊瑚宮心海',
            type: 'Hydro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/523/283/0001-0240-2.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/sangonomiya-kokomi-profile-card-genshin-impact.jpg',
            content: `
            <i>Kokomi is the Divine Priestess of Watatsumi Island, and also serves as its supreme leader.
            <br>She is well-versed in the art of war, is good at strategizing, and has keen insights into military affairs. She is also adept at handling domestic affairs, diplomacy, and other matters.
            <br>Still, this unfathomable leader has a mysterious side to her...
            <br> - Description from the Official Website</i>
            <br><br>The Divine Priestess and supreme leader of Watatsumi Island [sic]
            <br><br>Many believe Sangonomiya Kokomi to be an enigmatic, shrewd leader. However, she always has a quiet smile on her face, and while she gets things done in an orderly fashion, she will sometimes do so over laughter and light conversation.
            <br><br>Having read many military treatises from all over Teyvat since she was a child, Kokomi has a talent for strategy and is capable of outwitting opponents through clever stratagems. Although Watatsumi Island lacks manpower and materiel, its people have managed to turn the tide of battle many times thanks to Kokomi's tactical prowess. Whether in battle, trade, diplomacy, or internal affairs, Kokomi will do her best. Her achievements have won her the respect of Watatsumi Island's various factions.
            <br><br>"Never fear, Her Excellency Sangonomiya is here," has become a popular saying amongst the people of Watatsumi Island.
            <br><br>However, few people know that Kokomi's biggest aspiration has always been to merely be an adviser behind the scenes. Socializing with others is in fact a most tiring task for her. Her hands shake every time she gives a speech, and she entertains thoughts of retreating into herself every time work starts piling up. She enjoys herself most while holed up at home after finishing her work, face buried in her military strategy books.
            <br><br>To reach a lofty post at such a young age is considered a great achievement, but for Kokomi, the higher up one is on the mountain, the more treacherous the path.
            `, 
            },
            {
            name: 'Keqing',
            otherName: '刻晴',
            type: 'Electro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/476/125/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/keqing-electro-character-profile-card-genshin-impact.jpg',
            content: `
            <i>The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.
            <br>She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.
            <br> - Description from the Official Website</i>
            <br><br>The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.
            <br><br>One of the Liyue Qixing, Keqing has an uncompromising belief in actions over words. If she sees something that needs doing, she'll do it herself. For example, she traveled around Liyue and carefully memorized each detail of the land so that she may one day be able to maximize the utility of every last inch of Liyue.
            <br><br>Keqing deals with the day-to-day affairs of Liyue, whether great or small, while Rex Lapis only descends once a year.
            <br><br>To many, the millennia of prosperity that Liyue has enjoyed serve to legitimize Rex Lapis' guidance of the city. But Keqing has her reservations about all this, viewing Liyue's present prosperity as akin to a magnificent sandcastle on the beach — humanity does not have the luxury of deciding when the tide will come in.
            <br><br>Rex Lapis has watched over Liyue for a millennium. But what about the next millennium? What about the next ten, or the next hundred millennia? How long are we expecting this status quo to last?
            <br><br>It is this unanswered question that drives Keqing to work relentlessly and remain diligent.
            <br><br>From most people's perspective, there is no point in working oneself up like this. But Keqing cannot sit by idly and ignore this hidden danger.
            <br><br>The people of Liyue have never considered navigating the future on their own terms. But someone must walk on the front line of the epoch and forge a new path with their own hands.
            <br><br>From most people's perspective, there is no point in working oneself up like this. But Keqing cannot sit by idly and ignore this hidden danger.
            `, 
            },
            {
            name: 'Barbara',
            otherName: '',
            type: 'Hydro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/393/388/barbara2.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/06/barbara-character-profile-card-genshin-impact.jpg',
            content: `
            <i>The Deaconess of the Favonius Church and a shining starlet adored by all. Although the concept of a starlet is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless. "I owe everything to the city's spirit of freedom" — Barbara, regarding her popularity.
            <br> - Description from the Official Website</i>
            <br><br>Barbara, the Deaconess of the Knights of Favonius, is a shining starlet beloved by the people of Mondstadt.
            <br><br>Her Hydro power is the best remedy for a wound, just like her soothing singing and dancing is solace to a weary heart.
            <br><br>The people of Mondstadt all think Barbara has some kind of magical power that can heal both the wounds and the heart, but only Barbara herself knows that the secret of such magic is diligence.
            `, 
            },
            {
            name: 'Jean',
            otherName: '',
            type: 'Anemo',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/392/446/jean1.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/jean-card-profile-genshin-impact.webp',
            content: `
            <i>As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.
            <br>She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.
            <br> - Description from the Official Website</i>
            <br><br>As the acting Grand Master for the Knights, Jean takes all of her responsibilities and duties associated with the role seriously, regardless of how minor the tasks may seem, such as finding a lost cat. Due to this, Jean often exhausts herself trying to complete commissions from the locals, much to the concern of her fellow members.
            <br><br>Her devotion to her duties stems from two reasons; her upbringing as a child, and Varka's teachings. Even though he consistently takes his duties lightly, his relaxed and unruly personality has contributed to her growth. She shows no resentment towards his attitude, instead vowing to ensure that the city will be more prosperous and welcoming when he returns. Her work ethic makes her well-liked by both Mondstadt's citizens, her fellow members, and is noted by other organizations. Although she prefers using peaceful methods to solve problems, she will not hesitate to use force if necessary. She has a habit of calling Diluc her senior, even well after he left the Knights. Despite this, she acknowledges that they both share the same vision of protecting Mondstadt.
            <br><br>She sees Vennessa as a role model because of her exploits and how she left an impressive legacy behind and works tirelessly to maintain her legacy and Mondstadt's safety. Whenever she feels troubled or confused, she often heads to the Great Tree in Windrise.[2]
            `, 
            },
            {
            name: 'Ganyu',
            otherName: '甘雨',
            type: 'Cryo',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/487/807/0001-0240.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/ganyu-cryo-character-profile-card-genshin-impact.jpg',
            content: `
            <i>The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins.
            <br>Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads.
            <br>After all, Ganyu firmly believes that all the work she does is in honor of her contract with Rex Lapis, seeking the well-being of all living things within Liyue.
            <br> - Description from the Official Website</i>
            <br><br>For the Liyue Qixing of the lofty Yujing Terrace, Ganyu is not merely a companion to serve them, but is instead coordinator of the web of information that moves across Liyue Harbor, and the architect of administrative efficiency.
            <br><br>Complex meeting minutes, disorderly report data... Every day piles of documents flow by like water, each one personally compiled by her into clear and concise words in order to assist the Qixing's every decision and negotiation as they flow through various organizational departments.
            <br><br>In the eons that have gone by, the Qixing have changed with each succession of their posts, while only Ganyu has lived to see the flourishing of Liyue Harbor from beginning to the modern day.
            <br><br>The human blood that runs through her veins makes her reluctant to leave the splendor of the city lights, while her adeptus side leads her to yearn for the gentle serenity of her adeptal homeland.
            <br><br>For the half-human, half-adeptus Ganyu, between the bustling sea of people and the ethereal clustered peaks, which is more fitting to call home?
            `, 
            },
            {
            name: 'Kamisato Ayaka',
            otherName: '神里綾華',
            type: 'Cryo',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/479/933/main.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/ayaka-character-profile-card-genshin-impact.jpg',
            content: `
            <i>Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.
            <br>Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.
            <br> - Description from the Official Website</i>
            <br><br>Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Poised and graceful, noble and virtuous.
            <br><br>Working in tandem with her elder brother and the current head of the clan, Kamisato Ayato, the siblings divided among themselves different responsibilities arising from their noble lineage. Ayato is in charge of government affairs while Ayaka watches over the clan's internal and external affairs.
            <br><br>Ayaka is a kind-hearted girl with a pleasant temperament who treats others with politeness and courtesy. She holds the people of Inazuma dear to her heart and often goes out of her way to personally assist them in all kinds of matters. She is a perfectionist with an earnest personality. People are often moved by her dedication, and those close to her gave her the honorary title of Shirasagi Himegimi. People in the neighborhood always talk about her with sincere admiration.
            <br><br>Thanks to the influence of Ayaka's excellent upbringing, her heart is as pure as crystallized ice. Just like the splendid colors reflected as the ice crystals are spinning in the winter air, such is Ayaka's spirit. She not only possesses great outward beauty and elegant demeanor, but also, which isn't known to many, has a tender and cute side.
            <br><br>But if you want to capture a heart hanging high in the sky, you must have the ability to climb up the clouds. In other words, Ayaka is eager to associate with people capable of achieving great feats — in her eyes, friendships are dictated by fate, the same way she was destined to wield her frost-covered sword.
            `, 
            },
            {
            name: 'Tartaglia',
            otherName: '',
            type: 'Hydro',
            game: 'Genshin Impact',
            id: 'https://cdn-animation.artstation.com/p/video_sources/000/404/634/main.mp4',
            image: 'https://genshin.global/wp-content/uploads/2022/05/tartaglia-childe-character-profile-card-genshin-impact.jpg',
            content: `
            <i>Meet Tartaglia — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.
            <br>Don't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war.
            <br> - Description from the Official Website</i>
            <br><br>Warm and friendly one minute, ruthless killer the next... His shifting and unpredictable personality can leave those around him at a loss for words to describe him. But in rare, private moments, he dispenses with titles, casts off his armor and the layers of intrigue that come with it, and show his authentic self.
            <br><br>His name is Tartaglia, and he is devoted to the thrill and the physical feel of battle.
            <br><br>Don't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war.
            <br><br>Like a velvet sheath that houses an ostensibly ornamental blade, his unpredictability puts people on edge.
            `, 
            },
        ],
        models_detail: null,
        models_detail_visible: false,
    },
    reducers: {
        setMenuState: (state,bool)=>{
            state.menuState = !state.menuState;
        },
        setSelectorState: (state)=>{
            state.selectorState = !state.selectorState;
        },
        setModelsDetail: (state,item)=>{           
            if(item.payload!==null){
                state.menuState=false;
                state.models_detail={name: item.payload.name,otherName:item.payload.otherName,type:item.payload.type,game:item.payload.game,id:item.payload.id,image:item.payload.image,content:item.payload.content};
                state.models_detail_visible=true;
            }
            else{
                state.menuState=false;
                state.models_detail=null;
                state.models_detail_visible=false;
            }
        },
    },
})

export const { setMenuState, setSelectorState, setModelsDetail } = counterSlice.actions;
export default counterSlice.reducer;