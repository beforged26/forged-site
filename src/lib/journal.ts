// The FORGED Huddle — one post per week, Wednesdays, starting June 17, 2026.
// A post goes live on the site when it has a `body`. Posts without one show as "Coming soon".
// To publish: add paragraphs to `body` (an array of strings; "## " prefix = subheading).

export type JournalPost = {
  issue: number;
  slug: string;
  title: string;
  pillar: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  body?: string[];
};


const ceilingBody: string[] = [
  "You've been doing the same drills. The same conditioning. The same film review. And something in you already knows: you're not getting worse, but you're not getting better either.",
  "That's the ceiling. And here's the part most athletes never get told:",
  "Hitting it isn't a sign that something's wrong with you. It's a sign that regular training has done exactly what it was built to do: get you this far, and no further.",
  "Most training programs are built for the average. Group drills. Standard conditioning. Generic feedback. That works, until it doesn't. The ceiling shows up exactly where \"good enough for everyone\" runs out of room for you specifically.",
  "Elite performers don't have a different ceiling. They have different access.",
  "The athletes who keep climbing aren't doing more reps. They're getting things most athletes never get near: real performance data instead of guesses, correction from people who refuse to let them coast, mental training treated as seriously as physical training, and a circle that expects more than they're currently giving.",
  "That access has historically come down to money, location, or who you happen to know. FORGED exists to break that link.",
  "Here's what the ceiling usually looks like up close, and what elite-level access actually does about each one.",
  "## 1. You stopped getting corrected.",
  "Early on, coaches gave you feedback constantly. Now? Silence. Not because you've arrived, but because regular training has nothing new left to offer you.",
  "What elite performers do: They seek out correction on purpose, from people who will tell them the truth instead of what they're already good at.",
  "## 2. You win the same way every time.",
  "If your highlight reel looks identical to last season's, with the same strengths and the same patterns, you've plateaued. Repetition without expansion isn't mastery. It's a ceiling with good lighting.",
  "What elite performers do: They isolate the one skill they avoid using in games because it isn't reliable yet, and they build it deliberately instead of avoiding it forever.",
  "## 3. Your body knows more than your training does.",
  "You can feel when something's off (tightness, imbalance, fatigue that doesn't add up) but you don't have the data to know why. Most athletes are training blind, guessing instead of measuring.",
  "What elite performers do: They get actually assessed. Heart rate performance data. Movement screening. Numbers, not opinions. You can't fix what you've never measured.",
  "## 4. You're mentally checked out before the pressure even starts.",
  "If your mind is defeated before the serve, before the whistle, before anyone's even watching, that's not a talent problem. It's an unaddressed mental performance gap, and it will cap you long before your body does.",
  "What elite performers do: They train the mental game like a skill, not a personality trait. Most athletes never get shown how.",
  "## 5. No one in your circle is asking more of you.",
  "If everyone around you is comfortable with where you are, you will stay exactly there. Ceilings don't get broken alone. They get broken in rooms full of people who refuse to let you settle.",
  "What elite performers do: They find that room, even if it means building it themselves.",
  "## The point",
  "None of this is about talent. It's about access: to real assessments, real correction, real mental training, and a room that won't let you coast. That access has always existed. It just hasn't always existed for everyone.",
  "That's the entire reason FORGED exists.",
  "We're hosting a development summit this November in Mesa, Arizona that brings everything elite performers use to sustain their highest level (performance assessments, movement screening, mental performance training, and a room full of people who expect more) to any athlete who's ready for it. Whether you can pay full price or not. Through our sponsor-funded access program, cost is not the thing standing between you and the room you need to be in.",
  "Registration is open at beforged.co.",
  "You already know if you've hit the ceiling. The only question left is whether you finally get the access to break through it.",
];

const START = Date.UTC(2026, 5, 17); // June 17, 2026 (a Wednesday)
const dateFor = (issue: number) =>
  new Date(START + (issue - 1) * 7 * 86400000).toISOString().slice(0, 10);

const raw: Omit<JournalPost, "date" | "slug">[] = [
  { issue: 1, title: "Why I Built FORGED (And Who It's Really For)", pillar: "Access & Opportunity", summary: "The origin story: the gap I saw in athlete development and the problem FORGED exists to solve." },
  { issue: 2, title: "Signs You've Hit the Ceiling of Where You Are", pillar: "Performance", summary: "Hitting the ceiling is normal. Here is what it looks like, and what elite athletes do about it.", body: ceilingBody },
  { issue: 3, title: "What Most Coaches Get Wrong About Development", pillar: "Performance", summary: "Common coaching mistakes that stall athlete growth." },
  { issue: 4, title: "The Wellness Conversation No One Is Having With Athletes", pillar: "Wellness", summary: "Body image, athlete identity and burnout: the things most camps never address." },
  { issue: 5, title: "The Recruiting Game Is Broken. Here's What Actually Works.", pillar: "Access & Opportunity", summary: "An honest take on recruiting: what coaches want versus what athletes think they want." },
  { issue: 6, title: "Mental Performance Isn't a Bonus. It's the Foundation.", pillar: "Mental", summary: "Why the mental side should be trained like the physical side." },
  { issue: 7, title: "What I've Learned Watching Elite Athletes Up Close", pillar: "Performance", summary: "Personal observations from years inside the elite athlete world." },
  { issue: 8, title: "Iron Sharpens Iron: Why the Room You're In Matters", pillar: "Access & Opportunity", summary: "The peer effect: how your environment shapes your ceiling." },
  { issue: 9, title: "Coach Feature: What Most Coaches Won't Teach", pillar: "Performance", summary: "The first FORGED coach spotlight." },
  { issue: 10, title: "The Pressure Problem: Why Athletes Crumble and How to Fix It", pillar: "Mental", summary: "A practical breakdown of pressure training." },
  { issue: 11, title: "Nutrition Myths That Are Holding Athletes Back", pillar: "Wellness", summary: "Common athlete nutrition myths, debunked." },
  { issue: 12, title: "Athlete Feature: What She Gave Up to Get Here", pillar: "Access & Opportunity", summary: "An athlete story about sacrifice, grit and access." },
  { issue: 13, title: "Registration Is Open. Here's What to Expect at FORGED.", pillar: "Access & Opportunity", summary: "A full breakdown of the four days in Mesa." },
  { issue: 14, title: "Coach Feature: The Session I've Never Seen Anyone Else Run", pillar: "Performance", summary: "The second FORGED coach spotlight." },
  { issue: 15, title: "Why We Built a Scholarship Program (And How to Apply)", pillar: "Access & Opportunity", summary: "The access mission behind FORGED, and how to apply for a scholarship." },
  { issue: 16, title: "The Difference Between a Good Athlete and a Great One", pillar: "Performance", summary: "Beyond talent: habits, coachability and mindset." },
  { issue: 17, title: "What Sports Psychology Actually Looks Like in Practice", pillar: "Mental", summary: "Concrete tools, not theory." },
  { issue: 18, title: "Coach Feature: Why I Said Yes to FORGED", pillar: "Access & Opportunity", summary: "The third FORGED coach spotlight." },
  { issue: 19, title: "The Athlete Identity Crisis No One Talks About", pillar: "Wellness", summary: "What happens when sport becomes your whole identity, and what healthy looks like." },
  { issue: 20, title: "4 Weeks Out: What to Know Before You Arrive in Mesa", pillar: "Access & Opportunity", summary: "What to bring, what to expect and how to prepare mentally." },
  { issue: 21, title: "The One Thing Every Great Coach Has in Common", pillar: "Performance", summary: "A synthesis of everything we've written about coaching." },
  { issue: 22, title: "Why Mesa. Why November. Why Now.", pillar: "Access & Opportunity", summary: "The vision for why this moment matters for athlete and coach development." },
  { issue: 23, title: "We Start in 8 Days. Here's What's Coming.", pillar: "Access & Opportunity", summary: "Session previews and speaker teasers before the summit begins." },
  { issue: 24, title: "Day 1 at FORGED: It Begins.", pillar: "Event Week", summary: "Live from Mesa." },
  { issue: 25, title: "What FORGED Week Taught Me (And What's Next)", pillar: "Event Week", summary: "A recap of the inaugural class and a look at what's next." },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const posts: JournalPost[] = raw.map((p) => ({
  ...p,
  slug: `${p.issue}-${slugify(p.title)}`.slice(0, 70).replace(/-$/, ""),
  date: dateFor(p.issue),
}));

export const isVisible = (p: JournalPost) =>
  isLive(p) || p.date > new Date().toISOString().slice(0, 10);

export const isLive = (p: JournalPost) => !!p.body?.length;

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  });
