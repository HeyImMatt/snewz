import {renderArticle} from '../../public/scripts/renderArticle.js';

const dummyData = {
  status: 'ok',
  totalResults: 604,
  articles: [
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Jacopo Prisco, CNN',
      title: 'Pac-Man at 40: The eating icon that changed gaming history',
      description:
        'When "Pac-Man" debuted in Tokyo 40 years ago, no one could have predicted it would become the most successful arcade game of all time.',
      url:
        'https://www.cnn.com/style/article/pac-man-40-anniversary-history/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200518112524-02-pac-man-40-super-tease.jpg',
      publishedAt: '2020-05-21T09:30:37Z',
      content:
        'When "Pac-Man" debuted in Tokyo 40 years ago, no one could have predicted it would become the most successful arcade game of all time. \r\nThough video games were a relatively new medium, the recipe for success at the time was already well-established: People w… [+7813 chars]',
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: null,
      title:
        'Glowing coral reefs are striving to recover from bleaching, study says',
      description:
        'As oceans warm due to climate change, some coral reefs have been devastated in recent years by bleaching events that cause them to die and damage the biodiversity that depends on them.',
      url: 'http://rss.cnn.com/~r/rss/cnn_topstories/~3/hkW2XdmPQsU/index.html',
      urlToImage: null,
      publishedAt: '2020-05-21T15:37:57Z',
      content: null,
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: null,
      title: 'This man reuniting with his donkey will melt your heart',
      description:
        'Ismael Fernández thought his pet donkey Baldomera would not remember him after he had been under quarantine, but the beloved animal gave him an unexpectedly emotional reunion.',
      url:
        'https://www.cnn.com/videos/world/2020/05/21/man-donkey-reunion-spain-eg-orig.cnn',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200520201932-man-donkey-reunion-spain-1-super-tease.jpg',
      publishedAt: '2020-05-21T00:24:26Z',
      content:
        "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Kyle Feldscher',
      title:
        'Feds spent 20 years warning Michigan dam was in danger before it failed',
      description:
        'Federal regulators have warned for more than 20 years of inadequate spillways at a Michigan dam that was breached Tuesday, sending floodwaters raging into a city of more than 40,000.',
      url:
        'https://www.cnn.com/2020/05/20/politics/ferc-edenville-dam-midland-michigan-flooding/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200520135842-01-michigan-dam-breach-0519-edenville-super-tease.jpg',
      publishedAt: '2020-05-21T00:53:02Z',
      content:
        '(CNN)Federal regulators have warned for more than 20 years of inadequate spillways at a Michigan dam that was breached Tuesday, sending floodwaters raging into a city of more than 40,000.\r\nDocuments available on the Federal Energy Regulatory Commission websit… [+8047 chars]',
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: null,
      title: "Avlon: Here's why the Susan Rice email is no smoking gun",
      description:
        "CNN's John Avlon breaks down why the recently released Susan Rice email is not a smoking gun.",
      url:
        'https://www.cnn.com/videos/politics/2020/05/21/john-avlon-susan-rice-email-trump-reality-check-vpx.cnn',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/180328160726-susan-rice-super-tease.jpg',
      publishedAt: '2020-05-21T12:50:49Z',
      content:
        "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Andy Rose, CNN',
      title:
        'Police: At least two people injured in shooting at Arizona shopping complex',
      description:
        'At least two people were shot Wednesday night at the Westgate Entertainment Center shopping complex in Glendale, Arizona, according to police.',
      url:
        'https://www.cnn.com/2020/05/20/us/westgate-arizona-shooting/index.html',
      urlToImage:
        'https://cdn.cnn.com/cnnnext/dam/assets/200520233844-01-glendale-az-shooting-0520-super-tease.jpg',
      publishedAt: '2020-05-21T03:37:16Z',
      content:
        '(CNN)At least two people were shot Wednesday night at the Westgate Entertainment Center shopping complex in Glendale, Arizona, according to police.\r\nOne person is in custody, Glendale Police wrote on their official Twitter account, adding it is not an active … [+496 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: 'Reuters Editorial',
      title:
        "Japan 'closely communicating' with U.S. after arrest of two men over Ghosn escape: source",
      description:
        'Japan is closely communicating with relevant U.S. authorities following the U.S. arrest of two men on charges they enabled former Nissan Motor Co chairman Carlos Ghosn to escape from Japan last year, a Japanese government source said on Thursday.',
      url:
        'https://www.reuters.com/article/us-nissan-ghosn-japan-usa-idUSKBN22X087',
      urlToImage:
        'https://s4.reutersmedia.net/resources_v2/images/rcom-default.png',
      publishedAt: '2020-05-21T02:51:47Z',
      content:
        'TOKYO (Reuters) - Japan is closely communicating with relevant U.S. authorities following the U.S. arrest of two men on charges they enabled former Nissan Motor Co chairman Carlos Ghosn to escape from Japan last year, a Japanese government source said on Thur… [+250 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: 'Reuters Editorial',
      title:
        "Mnuchin sees U.S. economic bottom in second quarter, 'gigantic increase' fourth quarter",
      description:
        'U.S. Treasury Secretary Steven Mnuchin said on Thursday he believes the U.S. economy will "bottom out" in the second quarter and start to improve with the third quarter, with a "gigantic increase" in fourth quarter activity.',
      url:
        'https://www.reuters.com/article/us-health-coronavirus-usa-mnuchin-idUSKBN22X22C',
      urlToImage:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20200521&t=2&i=1519457491&w=1200&r=LYNXMPEG4K1IR',
      publishedAt: '2020-05-21T15:52:56Z',
      content:
        'WASHINGTON (Reuters) - U.S. Treasury Secretary Steven Mnuchin said on Thursday he believes the U.S. economy will “bottom out” in the second quarter and start to improve with the third quarter, with a “gigantic increase” in fourth quarter activity. \r\n“When you… [+323 chars]',
    },
    {
      source: { id: 'time', name: 'Time' },
      author: 'Stephanie Zacharek',
      title:
        'The Trip to Greece May Be More of the Same, But It’s Just the Vacation We Need Right Now',
      description:
        "The fourth installment in the 'Trip' series of movies featuring Steve Coogan and Rob Brydon is silly and totally satisfying.",
      url: 'https://time.com/5839813/the-trip-to-greece-review/',
      urlToImage:
        'https://api.time.com/wp-content/uploads/2020/05/THETRIPTOGREECEStill2.jpg?quality=85&w=1200&h=628&crop=1',
      publishedAt: '2020-05-21T02:20:56Z',
      content:
        'Are routines boring or comforting? That depends on the routine. At any other time, The Trip to Greece, the fourth and final installment of the Trip series of movies featuring Steve Coogan and Rob Brydon and directed by Michael Winterbottom (and adapted from a… [+1811 chars]',
    },
    {
      source: { id: 'time', name: 'Time' },
      author: 'John Flesher / AP',
      title: 'Michigan Dam Had Repeated Safety Violations Before Flooding',
      description:
        'A hydroelectric dam that failed to hold back floodwaters this week in Michigan was the target of lengthy investigations by federal regulators',
      url: 'https://time.com/5840020/michigan-dam-safety-violations/',
      urlToImage:
        'https://api.time.com/wp-content/uploads/2020/05/michigan-dam-safety-violations.jpg?quality=85&w=1200&h=628&crop=1',
      publishedAt: '2020-05-21T00:52:57Z',
      content:
        '(TRAVERSE CITY, Mich.) — A hydroelectric dam that failed to hold back floodwaters this week in Michigan was the target of lengthy investigations by federal regulators, who revoked the facility’s license over safety violations two years before the flooding tha… [+5023 chars]',
    },
    {
      source: { id: 'time', name: 'Time' },
      author: 'Amy Gunia',
      title:
        'Police Report Three People Injured and Suspect in Custody After Shooting in Arizona',
      description:
        'At least three people were injured Wednesday night following a shooting in Glendale, Arizona, police say',
      url: 'https://time.com/5840083/glendale-arizona-westgate-shooting/',
      urlToImage:
        'https://api.time.com/wp-content/uploads/2020/02/crime-scene-1.jpg?quality=85&w=1200&h=628&crop=1',
      publishedAt: '2020-05-21T04:01:35Z',
      content:
        'At least three people were injured Wednesday night following a shooting in Glendale, Arizona, police say. One suspect was taken into custody, according to authorities.\r\nOne person believed to be in critical condition was sent to the hospital, while two others… [+1021 chars]',
    },
    {
      source: { id: 'time', name: 'Time' },
      author: 'Associated Press',
      title:
        'Lori Loughlin and Mossimo Giannulli Will Plead Guilty in College Admissions Bribery Case',
      description:
        'Lori Loughlin and her husband, Mossimo Giannulli, agreed to plead guilty to charges in the college admissions case and serve prison time.',
      url:
        'https://time.com/5840558/lori-loughlin-plead-guilty-college-admissions/',
      urlToImage:
        'https://api.time.com/wp-content/uploads/2020/03/lori-loughlin-court.jpg?quality=85&w=1200&h=628&crop=1',
      publishedAt: '2020-05-21T14:00:22Z',
      content:
        '(Boston) — Actress Lori Loughlin and her fashion designer husband, Mossimo Giannulli, have agreed to plead guilty to charges in the college admissions bribery case and serve prison time, according to court papers filed Thursday.\r\nThe couple agreed to plead gu… [+1347 chars]',
    },
    {
      source: { id: 'abc-news', name: 'ABC News' },
      author: 'DAN SEWELL Associated Press',
      title: 'Longtime news executive William J. Keating dead at 93',
      description: 'Former congressman and newspaper executive William J',
      url:
        'https://abcnews.go.com/Politics/wireStory/longtime-news-executive-william-keating-dead-93-70807650',
      urlToImage:
        'https://s.abcnews.com/images/Politics/WireAP_a52c775f95fd467098b6648d8f580708_16x9_992.jpg',
      publishedAt: '2020-05-21T14:29:42Z',
      content:
        'CINCINNATI -- \r\nWilliam J. Keating, who spent three decades as an Ohio newspaper executive after leaving Congress in the mid-1970s, has died, his family confirmed. He was 93.\r\nThe Cincinnati native led The Cincinnati Enquirer as president and later as publish… [+7374 chars]',
    },
    {
      source: { id: 'abc-news', name: 'ABC News' },
      author: 'Emily Shapiro',
      title:
        '1 injured in shooting at Naval Air Station Corpus Christi, suspected neutralized',
      description:
        'One security force member has been injured in a shooting at Naval Air Station Corpus Christi in Texas Thursday morning.',
      url:
        'https://abcnews.go.com/US/injured-shooting-naval-air-station-corpus-christi-suspected/story?id=70806888',
      urlToImage:
        'https://s.abcnews.com/images/US/nas-ht-er-191211_hpMain_16x9_992.jpg',
      publishedAt: '2020-05-21T12:52:02Z',
      content:
        'One security force member has been injured in a shooting at Naval Air Station Corpus Christi in Texas Thursday morning.\r\nThe shooter has been neutralized, Navy officials said Thursday.\r\nThe shooting occurred at about 6:15 a.m. local time.\r\nAll gates remain cl… [+78 chars]',
    },
    {
      source: { id: 'abc-news', name: 'ABC News' },
      author: 'Ivan Pereira',
      title:
        'Lori Loughlin and husband agree to plea guilty in college admission scam case',
      description:
        'Lori Loughlin and her Mossimo Giannulli have agreed to a plea deal in connection with their involvement in the college admission scandal.',
      url:
        'https://abcnews.go.com/US/lori-loughlin-mossimo-giannulli-agree-plea-guilty-college/story?id=70807870',
      urlToImage:
        'https://s.abcnews.com/images/US/lori-loughlin-rt-jpo-190403_hpMain_2_16x9_992.jpg',
      publishedAt: '2020-05-21T13:18:20Z',
      content:
        'Lori Loughlin and her husband, Mossimo Giannulli, have agreed to a plea deal in connection with their involvement in the college admissions scandal.\r\nThe "Full House" actress and the fashion designer will serve two months in prison, pay a $150,000 fine and ha… [+571 chars]',
    },
    {
      source: { id: 'abc-news', name: 'ABC News' },
      author: 'Max Golembo',
      title:
        'Flood warnings for Carolinas, Virginia as waters slowly recede in Midwest',
      description: 'Record flooding is continuing Thursday across the U.S.',
      url:
        'https://abcnews.go.com/US/flood-warnings-carolinas-virginia-waters-slowly-recede-midwest/story?id=70803346',
      urlToImage:
        'https://s.abcnews.com/images/US/AFP_1RZ5Z5_200521_hpMain_20200521-012835_16x9_992.jpg',
      publishedAt: '2020-05-21T10:26:55Z',
      content:
        'The record flooding in the Midwest that forced thousands to evacuate is slowly receding, but now Virginia and the Carolinas are under flood warnings -- another dam is also at risk.\r\nMajor flooding is forecast in the Carolinas and part of Virginia, where 6 to … [+1466 chars]',
    },
    {
      source: { id: 'vice-news', name: 'Vice News' },
      author: 'Emma Ockerman, Christina Sterbenz',
      title:
        'Lori Loughlin Finally Pleaded Guilty to Trying to Scam Her Daughters Into USC',
      description:
        "She's agreed to two months in prison, although a judge still has to approve.",
      url:
        'https://www.vice.com/en_us/article/7kp9d4/lori-loughlin-pleads-guilty-college-admissions-scandal',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5ec68db69c0d3b009770a04b/lede/1590070727410-AP_20142493383480.jpeg?crop=1xw:0.4987xh;0xw,0.037xh&resize=1200:*',
      publishedAt: '2020-05-21T14:33:39Z',
      content:
        'Want the best of VICE News straight to your inbox? Sign up here.\r\n Actress Lori Loughlin and her husband, Mossimo Giannulli, just agreed to plead guilty to their role in the college admissions scandal more than a year after they were first arrested for conspi… [+2272 chars]',
    },
    {
      source: { id: 'vice-news', name: 'Vice News' },
      author: 'Samantha Cole, Emanuel Maiberg',
      title:
        "Sex Workers Say a New Bill to Stop Child Exploitation Doesn't Go Far Enough",
      description:
        "The Invest in Child Safety Act could be a good alternative to EARN IT, but some sex worker advocacy groups say it doesn't focus on the right things.",
      url:
        'https://www.vice.com/en_us/article/bv8xpa/invest-in-child-safety-act-doesnt-go-far-enough',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5ec6a48a82e75d009cb319e8/lede/1590076863298-architecture-building-capitol-dawn-616852.jpeg?crop=1xw:0.84375xh;center,center&resize=1200:*',
      publishedAt: '2020-05-21T16:20:00Z',
      content:
        "A new bill introduced earlier this month is being praised as an alternative to the potentially-disastrous EARN IT act that would make sites even more vulnerable for user's speechbut sex workers say it still doesn't go far enough in protecting marginalized gro… [+4731 chars]",
    },
    {
      source: { id: 'vice-news', name: 'Vice News' },
      author: 'Matthew Gault, Jason Koebler',
      title: 'UFO Subreddit Was Subject to Systemic Censorship',
      description:
        'The moderators of Reddit’s UFO community automatically censored posts referring to ‘Brazil,’ ‘Navy,’ and ‘Pentagon.’',
      url:
        'https://www.vice.com/en_us/article/ep4dan/ufo-subreddit-was-subject-to-systemic-censorship',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5ec55505967c8b009d2c7222/lede/1589990806419-ufo-1668223_1920.jpeg?crop=1xw:0.9xh;center,center&resize=1200:*',
      publishedAt: '2020-05-21T12:00:00Z',
      content:
        'Its a great time to get into UFOs. The US Navy officially published three previously seen, but unconfirmed, videos of unidentified flying objects. Journalists have dug up incident reports of Navy pilots interactions with strange objects flying in the sky. For… [+3309 chars]',
    },
    {
      source: { id: 'vice-news', name: 'Vice News' },
      author: 'Farideh Sadeghin, Amanda Catrini',
      title: 'Grilled Shrimp with Miso, Ginger, and Scallion Butter Recipe',
      description: 'Add some tang to your grilled shrimp.',
      url:
        'https://www.vice.com/en_us/article/xgqbgn/grilled-shrimp-with-miso-ginger-and-scallion-butter-recipe',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5e9881fadd4d9000961dbd70/lede/1587126913136-miso-grilled-shrimp-recipe.jpeg?crop=1xw:0.8427xh;0xw,0xh&resize=1200:*',
      publishedAt: '2020-05-21T11:00:00Z',
      content:
        'Serves 2Prep time: 10 minutesTotal time: 25 minutes\r\nIngredients\r\n4 tablespoons|65 grams unsalted butter¼ cup|60 ml olive oil1 tablespoon red miso3 scallions, thinly sliced1 garlic clove, mashed into a paste1 (1-inch) piece ginger, peeled and mashed into a pa… [+614 chars]',
    },
  ],
};
//Renders dummy data for layout work
export function getDummyData() {
    dummyData.articles.forEach((el) => {
      let article = {
        title: el.title,
        source: el.source.name,
        description: el.description,
        url: el.url,
        urlToImage: el.urlToImage,
      };
      renderArticle(article);
    });
  }
  //use below for dummy data
  //res.render('index', { articles: dummyData, filters: {snoozetrump: 'on', snoozecovid: 'on'} });
