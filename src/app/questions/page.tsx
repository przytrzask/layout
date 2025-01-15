import { Button } from "@/components/ui/button";

export default function QuestionsPage() {
  return (
    <div className=" flex flex-col items-center justify-center p-24">
      <header>
        <h1 className="text-2xl font-bold mb-4">
          This is the H1 question header text. Customise it for your layout when
          you need.
        </h1>
        <div className="flex gap-4">
          <Button variant="default" className="rounded-full">
            2 See answers
          </Button>
          <Button variant="outline" className="rounded-full">
            Ask AI
          </Button>
        </div>
      </header>

      {/* Answer section */}
      <div>
        <div className="flex items-center gap-2 text-green-600 mb-2">
          <span className="font-semibold">Expert-Verified Answer</span>
        </div>
        <div className="prose prose-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pickled
            pepper pilgrimage postponed permanently (pickles overrated) black
            metal meditation small-batch sourdough starter success single-origin
            serenity sought and secured (完美的宁静 wánměi de níngjìng - perfect
            tranquility in chinese) night owl narrative nap homemade marmalade
            masterpiece micro-batch coffee and craft beer connoisseurs that
            never compromise post-modern pottery ethical eyeshadow evening hella
            hyped hangover cassette tape case chaos iron-cast skillet saga
            kombucha keg kommotion kickoff kerfuffle contained calmly. Vintage
            vinyl vortex victory black and white film festival frenzy taxidermy
            teacher tribute tour inspires taxidermy art multi-instrumentalist
            misery artisanal bread baking blues pickled garlic pilgrimage
            polaroid portrait project diy disco dance party jukebox joint
            jitters jam locavore truffle oil tears (of joy, again) ergonomic
            everything mocktail mixology masterpiece muddled (but still
            delicious) found footage film festival favorite moody monday
            motivation maintains momentum (mondays not so bad after all)
            upcycled utopia unveiled night owl narrative nap! Socially conscious
            smoothie saga bicycle commute camaraderie club vintage vinyl vortex
            upcycled utopia unveiled chai latte creation challenge homemade
            marmalade masterpiece marketed marvelously indoor jungle
            illumination issue illuminated quality over quantity and mindful
            living always and forever the way soy sauce substitute saga cassette
            tape case compilation creation craze pickled pepper pilgrimage
            postponed synthwave serenade session singalong lamplight literature
            launchpad for creativity soy wax candle calamity contained
            minimalist mug moment missed mocktail mixology masterpiece soy wax
            candle calamity contained (mostly) natural deodorant nirvana not
            needed (thanks to healthy habits) synthwave serenade session
            slumber? Handmade holiday heart attack diy disaster zone foraged
            finds retrograde rollerskate renaissance remix rolls on with
            rhythmic grace soy wax candle calamity contained (mostly, minor soot
            smudge) handmade holiday heart attack hand-me-down hidden gem
            historically significant handmade holiday heart attack. Bicycle
            commute camaraderie salvaged surfboard sanctuary found footage film
            festival favorite small-batch sourdough starter success sustainable
            shoe search lost luggage lament flannel fridays natural deodorant
            nirvana single-origin serenity taxidermy teacher tribute tour
            quality over quantity and mindful living always and forever the way
            kimchi cravings conquered (kinda) synthwave serenade session
            singalong foraged mushroom misfortune overpriced organic orange
            overpriced organic orange plant-based protein paradise lo-fi beats
            and life lessons learned plant-based power struggle soy wax candle
            calamity! Hand-me-down hidden gem historically significant synthwave
            serenade session homemade kombucha catastrophe gram-worthy garden
            gnome small-batch sourdough starter success story. Urban exploration
            escapade epic ending etched in memory recycled record revival
            recycled denim dream tattooed hipster and alternative culture lovers
            that never conform indoor jungle illumination issue
            multi-instrumentalist mastery hand-crafted haven double denim
            daredevil dilemma self-published poetry prize pursuit! Bicycle
            commute calamity single-origin sadness moody monday motivation moody
            monday blues sustainable sock search satisfied analogue album
            appreciation afternoon indie music single-origin serenity ethical
            eyeshadow experiment independent bookstore inspiration
            mondrian-inspired morning farm-to-table? Gourmet grilled cheese and
            charcuterie board perfection taxidermy teacher tribute tour inspires
            taxidermy art that transcends tradition mustache wax magic instant
            noodle innovation polaroid portrait project mocktail misadventure
            thrift store treasure trove salvaged surfboard sanctuary sandcastle
            session success shared on social media fair-trade and sustainable
            fashion revolution that matters night owl narrative nap high-top
            haven hangout haven for high fives kombucha keg kommotion kickoff
            kerfuffle. Hella hyped headphones overpriced organic orange odyssey
            overcome (thanks to local farmers market friendship) flannel shirt
            fashion forward urban exploration escapade epic ending etched in
            memory (and a photo album) slow cooker symphony jukebox joint jive
            hella hyped haiku hangover high-top haven hideaway flea market
            forgery fear cassette tape comeback hella hyped haiku hangover
            polaroid portrait perfection pursuit natural deodorant nirvana not
            found year-round hiking and outdoor enthusiasts unite and explore
            and discover irony is everything. Kombucha keg kommotion kickoff
            kerfuffle contained calmly flannel fridays night owl narrative nap
            mondrian-inspired mural masterpiece recycled record revival
            micro-batch coffee and craft beer connoisseurs that never compromise
            instant noodle innovation implosion lo-fi beats and life lessons
            learned diy disco disaster! Plant-based protein paradise planned and
            prepped perfectly indoor jungle illumination issue recycled record
            player flannel shirt fashion flashback intentional living retreat
            locally sourced longing leads to local love story (and locally
            roasted coffee) post-modern pottery truffle oil tears (of joy,
            again, and a touch of extravagance)? Self-published poetry prize
            thrift store treasure trove temptation recycled record revival
            resistance rally rocks the town, record stores rejoice taxidermy
            teacher trauma minimalist mug moment manifested magnificently moody
            monday motivation maintains momentum lo-fi beats and existential
            dread overpriced organic orange odyssey overcome (thanks to local
            farmers market). Urban exploration escapade epic ending etched in
            memory artisanal foodie culture and community always thriving irony
            is everything nostalgic novelty and vintage collectors that never
            forget eco-friendly cleaning concoction socially conscious smoothie
            sip homemade marmalade mishap thrift store treasure trove temptation
            resisted (but barely) jukebox joint jive soy wax candle calamity
            sustainable sock search satisfaction spurs sock-swapping soirée
            sensation patchwork quilt pondering pause pitchfork perfect playlist
            lo-fi beats and life lessons learned (lead to self-love!) indoor
            jungle illumination issue macrame masterpiece patchwork quilt
            pondering pause natural deodorant nirvana not found single-origin
            serenity sought and secured (完美的宁静 wánměi de níngjìng - perfect
            tranquility in chinese) pickled everything phase!
          </p>
        </div>
      </div>
    </div>
  );
}
