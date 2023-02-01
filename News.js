import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Spiner } from "./Spiner";
import PropTypes from 'prop-types';


// import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },

      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Nobel laureate Paul Krugman compares Tesla to bitcoin — and says he wouldn't trust Elon Musk to feed his cat",
      description:
        "Breathless hype and faith underpin the valuations of both Tesla and bitcoin, but some of Musk's appeal has faded, Krugman said.",
      url: "https://markets.businessinsider.com/news/stocks/paul-krugman-tesla-stock-price-bitcoin-elon-musk-twitter-network-2022-12",
      urlToImage:
        "https://i.insider.com/63ac32e1a51b3d00185b020f?width=1200&format=jpeg",
      publishedAt: "2022-12-28T13:40:03Z",
      content:
        "Paul Krugman has compared Tesla stock to bitcoin, saying hype and faith underpin both assets' valuations, and joked he wouldn't trust Elon Musk to take care of his cat.\r\nTesla stock skyrocketed more … [+2248 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "jerb@insider.com (Jordan Parker Erb)",
      title:
        "Musk's yes-men: 5 experts break down why it's difficult to 'speak truth to power.'",
      description:
        'Elon Musk has some of the most powerful relationships in the business world, but experts say his circle of "yes-men" could be his undoing.',
      url: "https://www.businessinsider.com/elon-musks-yes-men-5-experts-break-down-why-its-difficult-to-speak-truth-to-power-2022-12",
      urlToImage:
        "https://i.insider.com/63ac16eb3e42ed001855ab55?width=1200&format=jpeg",
      publishedAt: "2022-12-28T11:30:00Z",
      content:
        "Top of the morning, tech readers! I'm Jordan Parker Erb, worn out from a long weekend of holiday fun.\r\nLike yesterday, we're continuing with some of the year's best stories from our VC and startups t… [+3784 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author:
        "hlangley@businessinsider.com (Hugh Langley,Kali Hays,Ashley Stewart,Madeline Stone,Ellen Thomas,Eugene Kim)",
      title:
        "Big Tech predictions for 2023: A rival for Twitter, Amazon deceleration, Google's AI wake-up call, Microsoft's serious game, cloud bills, and DTC decline",
      description:
        "After a tumultuous year for Big Tech, Insider reporters share what to watch across the industry in 2023.",
      url: "https://www.businessinsider.com/big-tech-predictions-for-2023-twitter-google-microsoft-amazon-dtc-2022-12",
      urlToImage:
        "https://i.insider.com/63a4ffdd83bbf400195ad90a?width=1200&format=jpeg",
      publishedAt: "2022-12-28T10:00:00Z",
      content:
        "A decade of technology abundance ended this year, and the painful adjustments will ripple across the industry in 2023.\r\nElon Musk's acquisition of Twitter encapsulates the broader situation. At $44 b… [+7311 chars]",
    },
    {
      source: {
        id: null,
        name: "Fast Company",
      },
      author: "Jared Newman",
      title: "The 25 best new apps of 2022",
      description:
        "From AI-enhanced creative tools to new privacy powers, these are the best new apps of the year.\n\nWhile 2020 and 2021 brought us plenty of apps that capitalized on the remote work boom, 2022 feels a bit like a return to normalcy.Read Full Story",
      url: "https://www.fastcompany.com/90828187/best-new-apps-2022?partner=rss&utm_source=rss&utm_medium=feed&utm_campaign=rss+fastcompany&utm_content=rss",
      urlToImage:
        "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/12/p-1-90828187-the-25-best-new-apps-of-2022.jpg",
      publishedAt: "2022-12-28T00:05:00Z",
      content:
        "While 2020 and 2021 brought us plenty of apps that capitalized on the remote work boom, 2022 feels a bit like a return to normalcy.\r\nThe best apps of the year spanned a wide range of categories, incl… [+11372 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "Aparta, 5G: las llamadas vía satélite son una de las grandes apuestas de la industria para 2023",
      description:
        "Una de las grandes novedades de los iPhone 14 presentados hace pocos meses fue la posibilidad de hacer llamadas sin cobertura móvil. El secreto estaba en que no se hacían con las redes móviles convencionales, sino vía satélite. Huawei ha comenzado también a o…",
      url: "https://www.xataka.com/moviles/aparta-5g-llamadas-via-satelite-grandes-apuestas-industria-para-2023",
      urlToImage:
        "https://i.blogs.es/8c1c23/captura-de-pantalla-2022-12-28-a-las-9.43.34/840_560.jpeg",
      publishedAt: "2022-12-28T09:31:15Z",
      content:
        "Una de las grandes novedades de los iPhone 14 presentados hace pocos meses fue la posibilidad de hacer llamadas sin cobertura móvil. El secreto estaba en que no se hacían con las redes móviles conven… [+2876 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Manu García (Visnuh)",
      title:
        "Navidad en MediaMarkt: nueve mejores ofertas en portátiles, barras de sonido, patinetes eléctricos y más",
      description:
        "Última semana del año y última campaña de ofertas de MediaMarkt. Aquí tienes algunas de las mejores ofertas para ultimar regalos de Reyes y prepararte para el año próximo. Tienes artículos tan interesantes como portátiles, cámaras instantáneas, barras de soni…",
      url: "https://www.xataka.com/seleccion/navidad-mediamarkt-nueve-mejores-ofertas-portatiles-barras-sonido-patinetes-electricos",
      urlToImage: "https://i.blogs.es/a207ec/mediamarkt/840_560.jpg",
      publishedAt: "2022-12-28T09:01:16Z",
      content:
        "Última semana del año y última campaña de ofertas de MediaMarkt. Aquí tienes algunas de las mejores ofertas para ultimar regalos de Reyes y prepararte para el año próximo. Tienes artículos tan intere… [+4632 chars]",
    },
    {
      source: {
        id: null,
        name: "Nikkei.com",
      },
      author: "Staff Writer",
      title:
        "Apple Japan hit with $98M in back taxes for missing duty-free abuses",
      description:
        "Stores failed to flag suspicious bulk iPhone purchases by foreign shoppers",
      url: "https://asia.nikkei.com/Business/Retail/Apple-Japan-hit-with-98m-in-back-taxes-for-missing-duty-free-abuses",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F2%252F4%252F8%252F3%252F43693842-5-eng-GB%252FGettyImages-1445281555_2048x1152.jpg?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
      publishedAt: "2022-12-28T01:10:11Z",
      content:
        "TOKYO -- Apple Japan is being charged 13 billion yen ($98 million) in additional taxes by Tokyo authorities, apparently for bulk sales of iPhones and other devices to foreign tourists that were incor… [+312 chars]",
    },
    {
      source: {
        id: null,
        name: "The Colorado Sun",
      },
      author: "Jason Blevins",
      title:
        "Emergency dispatch centers fielding dozens of automated 911 calls from iPhones",
      description:
        "Automated crash detection calls from skier iPhones are burdening resort town 911 emergency dispatch centers",
      url: "http://coloradosun.com/2022/12/26/skier-iphone-crash-detection-calls/",
      urlToImage:
        "https://newspack-coloradosun.s3.amazonaws.com/wp-content/uploads/2022/12/911_HC_02-1.jpg",
      publishedAt: "2022-12-28T03:18:07Z",
      content:
        "Dispatchers at the Summit County 911 Center fielded 71 automated crash notifications from skiers iPhones and Apple watches at the countys four ski areas last weekend. None of them involved an emergen… [+8326 chars]",
    },
    {
      source: {
        id: null,
        name: "Sindresorhus.com",
      },
      author: "Sindre Sorhus",
      title: "Run Stable Diffusion natively on your Mac",
      description: "Comments",
      url: "https://sindresorhus.com/amazing-ai",
      urlToImage: "https://sindresorhus.com/apps/amazing-ai/icon.png",
      publishedAt: "2022-12-28T00:59:11Z",
      content:
        "Simply describe the image you desire, and the app will generate it for you like magic!\r\nDeveloped exclusively for Apple silicon (M1/M2) - The app is NOT compatible with devices running on Intel chips… [+949 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "「Safariの日付を選ぶ仕組み」がカスタマーサポートに寄せられる苦情の3分の1を生み出していたという報告",
      description:
        "Appleが開発するウェブブラウザのSafariは、iPhoneやiPad、Macなどで使用されている標準的なブラウザです。ところが、効果的な高血圧薬を推奨する遺伝子検査のスタートアップ・Geneticureの創設者であるロバート・トーマス氏が、「Safariの日付を選ぶ仕組み」によって高齢のユーザーが戸惑ってしまい、Geneticureのカスタマーサポートに寄せられる苦情の3分の1を生み出していたと報告しています。続きを読む...",
      url: "https://gigazine.net/news/20221228-safari-date-picker-customer-support-issues/",
      urlToImage:
        "https://i.gzn.jp/img/2022/12/28/safari-date-picker-customer-support-issues/00.jpg",
      publishedAt: "2022-12-28T05:00:00Z",
      content:
        "AppleSafariiPhoneiPadMacGeneticureSafariGeneticure31\r\nSafari's date-picker is the cause of 1/3 of our customer support issues · GitHubhttps://gist.github.com/RobertAKARobin/850a408e04d5414e67d308a2b5… [+269 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "Kostenlos gucken: Apple-TV+-Serien bis zum 2. Januar",
      description:
        "Apple hat die erste Staffel bekannter Shows für alle Nutzer freigegeben. Der Zugriff läuft noch bis zum neuen Jahr, einen kleinen Pferdefuß gibt es allerdings.",
      url: "https://www.heise.de/news/Kostenlos-gucken-Apple-TV-Serien-bis-zum-2-Januar-7443338.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/1/0/2/6/262902024_541279a41f-2-2f2e57256dd4ecd6.png",
      publishedAt: "2022-12-28T12:16:00Z",
      content:
        "Wer Inhalte bei Apple TV+ ausprobieren möchte, ohne ein Probeabo abschließen zu müssen, kann noch bis zum 2. Januar einige der bekanntesten Shows bei dem Streamingdienst des iPhone-Herstellers kosten… [+2322 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Nils Jacobsen",
      title:
        "Ausblick: Was Big Tech, Mark Zuckerberg und Elon Musk 2023 bevorsteht",
      description:
        "2022 war ein Horrorjahr für die Technologiebranche. Gelingt Big Tech das Comeback? Es gibt gute Gründe, die dafür, aber auch dagegen sprechen.",
      url: "https://www.heise.de/news/Ausblick-Was-Big-Tech-Mark-Zuckerberg-und-Elon-Musk-2023-bevorsteht-7443680.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/7/1/2/0/2/shutterstock_1627989508-9f1bc314553beae8.jpg",
      publishedAt: "2022-12-28T11:14:00Z",
      content:
        "Inhaltsverzeichnis\r\nDie Erwartungen vor Jahresbeginn waren gedämpft: Nach mehr als 12 Jahren im Bullenmarktmodus würden auch für die erfolgsverwöhnte Techindustrie härtere Zeiten anbrechen, so der Te… [+9372 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Seth Kurkowski",
      title:
        "9to5Mac Daily: December 27, 2022 – TikTok ban, best voice assistant, more",
      description:
        "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by Tailscale: A fru…",
      url: "https://9to5mac.com/2022/12/27/9to5mac-daily-december-27-2022/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-12-28T04:34:33Z",
      content:
        "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+866 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "iPhone loses the spotlight to its competitors in MKBHD’s Smartphone Awards 2022",
      description:
        "Every year, popular tech YouTuber Marques Brownlee (better known as MKBHD) holds his own Smartphone Awards, in which he chooses the best smartphones in different categories. While last year the iPhone was awarded in three different categories, Apple’s smartph…",
      url: "https://9to5mac.com/2022/12/27/iphone-loses-the-spotlight-to-its-competitors-in-mkbhds-smartphone-awards-2022/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/MKBHD-Smartphone-Award-2022.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-12-28T04:02:03Z",
      content:
        "Every year, popular tech YouTuber Marques Brownlee (better known as MKBHD) holds his own Smartphone Awards, in which he chooses the best smartphones in different categories. While last year the iPhon… [+7184 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Sponsored Post",
      title:
        "Advanced anti-malware protection for your Mac with Acronis Cyber Protect Home Office",
      description:
        "Mac computers come with built-in anti-malware security features. But despite Apple’s efforts to keep the system up-to-date against digital threats, these protections are not enough to protect users from all the malware swirling around the web. That’s where Ac…",
      url: "https://9to5mac.com/2022/12/27/acronis-cyber-anti-malware-protection-mac/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Acronis-Cyber-Protect-Home-Office.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-12-28T02:23:03Z",
      content:
        "Mac computers come with built-in anti-malware security features. But despite Apple’s efforts to keep the system up-to-date against digital threats, these protections are not enough to protect users f… [+2571 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Using the iPhone 14’s 3x optical zoom to see familiar scenes in a new way",
      description:
        "One of the features of the two iPhone 14 Pro models is the 3x optical zoom, compared to the 2x zoom available on the standard models.\nDuring a Boxing Day stroll, I used this lens exclusively to revisit a photographic technique that has long been popular with …",
      url: "https://9to5mac.com/2022/12/28/3x-optical-zoom/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/3x-optical-zoom.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-12-28T12:44:47Z",
      content:
        "One of the features of the two iPhone 14 Pro models is the 3x optical zoom, compared to the 2x zoom available on the standard models.\r\nDuring a Boxing Day stroll, I used this lens exclusively to revi… [+4132 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Amber Neely)",
      title: "Looking back at 2022: Favorite hardware, software, and features",
      description:
        "It's been a long year, and we've seen it all. Our editorial staff shares their favorite gear, software, and features released over the course of 2022.Lots of new things are released every year, and this year was no different. There was the new Mac Studio, a n…",
      url: "https://appleinsider.com/articles/22/12/28/looking-back-at-2022-favorite-hardware-software-and-features",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/52044-103548-favorites-xl.jpg",
      publishedAt: "2022-12-28T12:41:12Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nIt's been a long year, and we've seen it all. Our editorial staff shares their favorite gear, software, and… [+9438 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "Foxconn hopes to retain workers by offering cash bonuses",
      description:
        "Apple supplier Foxconn is offering a $718 subsidy for employees to keep working after struggles with workers over COVID-19 restrictions.Foxconn seeks new employeesFoxconn will offer a subsidy for workers who stay in essential roles at the Zhengzhou iPhone fac…",
      url: "https://appleinsider.com/articles/22/12/28/foxconn-hopes-to-retain-workers-by-offering-cash-bonuses",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/52161-103776-foxconn-worker-xl.jpg",
      publishedAt: "2022-12-28T13:58:09Z",
      content:
        "Foxconn seeks new employees\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple supplier Foxconn is offering a $718 subsidy for employees to keep workin… [+1307 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Catherine Cargill)",
      title: "Best iOS apps for cooking basics in 2023",
      description:
        "Cooks these days have a lot on their plate, but thankfully, there are useful iOS apps to get started with meal prep, recipe organization, and more.For busy cooks who need help with things like making a grocery list and sticking to a healthy diet, there are ap…",
      url: "https://appleinsider.com/inside/ios-16/best/best-ios-apps-for-cooking-basics-in-2023",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/52047-103773-IMG_6608-xl.jpg",
      publishedAt: "2022-12-28T13:03:21Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nCooks these days have a lot on their plate, but thankfully, there are useful iOS apps to get started with m… [+6612 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Manuel Ramírez",
      title:
        "En 2030 desaparecerán los móviles según Nokia: Meta y Apple ya invierten en la tecnología a usar",
      description:
        "Nokia fue en su momento la actual Apple y ahora ha vaticinado que para 2030 los móviles tal como los conocemos podrían desaparecer. La tecnología que se usaría todavía está lejos de lo esperado, aunque las grandes tecnológicas están invirtiendo ingentes canti…",
      url: "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20221228/desapareceran-moviles-nokia-meta-apple-invierten-tecnologia/729427089_0.html",
      urlToImage:
        "https://s1.eestatic.com/2022/12/28/elandroidelibre/noticias-y-novedades/729437206_229802143_600x315.jpg",
      publishedAt: "2022-12-28T11:01:00Z",
      content:
        "Nokia sigue estando presente en los móviles gracias a Android, aunque se aleja de todo lo que fue en unos años en los que dominaba el mercado sin ningún competidor que le hiciera sombra. Ahora ha vat… [+2977 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "メディアジーンメディアコマース",
      title:
        "【Amazonタイムセール中！】Apple純正のMagSafeバッテリーパックが18%オフ、Apple Pencil（第2世代）が2,722円オフなど、期間限定価格で登場",
      description:
        "Amazon（アマゾン）で毎日開催されているタイムセール。本日2022年12月28日は、Apple純正のMagSafeバッテリーパックが18%オフ、Apple Pencil（第2世代）が2,722円オフなど、今すぐ欲しいアイテムがお得に登場しています。",
      url: "https://www.gizmodo.jp/2022/12/amazon-timesale-2022-1228-1.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/12/28/GIZ%E3%81%82.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-12-28T09:45:00Z",
      content:
        "Amazon20221228AppleMagSafe18%Apple Pencil22,722\r\n2022122817\r\n5,000\r\nApple Pencil(2)14%\r\niPadApple Pencil214%\r\nLightning\r\n AppleMagSafe18\r\nApple\r\niPhoneiPhoneAppleMagSafe19\r\nLightning15W\r\n -VII- 18%\r\n… [+160 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "宮城圭介",
      title:
        "Appleの初売り2日からスタート。先着3万名に限定デザインのAirTagがもらえます。",
      description:
        "毎年恒例のApple初売りが1月2日と3日に開催されることが発表されました。今回もiPhone購入者、先着3万名に卯年モチーフのAirTagがプレゼントされます。期間内でも在庫がなくなり次第終了なので、うさぎのAirTagを狙っている方はお早めに！",
      url: "https://www.gizmodo.jp/2022/12/apple-new-year-4.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/12/28/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%882022-12-2813.31.36.png?w=1280&h=630&f=jpg",
      publishedAt: "2022-12-28T05:00:00Z",
      content:
        "2023Apple \r\nApple123iPhone3AirTagAirTag \r\nImage: Apple\r\nApple32000AppleM1 MacBook Pro 1416Beats Flex4020BeatsiPhone 13\r\n2022/12/28\r\nImage: \r\nApple1232 1 \r\nSorce: Apple",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "松浦悦子/Word Connection JAPAN",
      title:
        "そりゃそうか。ダイソンの空気清浄ヘッドフォン、空気清浄中はバッテリーめっちゃ減る",
      description:
        "Image:Dyson空気清浄ヘッドホン。ダイソン（Dyson）社初のオーディオ製品は余計なノイズとともに、空気中の余計な微粒子を除去することを約束しています。2022年春、ダイソンは同社初のオーディオ製品であるヘッドフォンDysonZoneを発表しました。そのときの話では、この製品には空気清浄システムと送風シールドが組み込まれ、ノイズだけでなく、空気中の余計な微粒子もブロックされるということでし",
      url: "https://www.gizmodo.jp/2022/12/dyson-air-purifying-headphones-filter-price-release-dat.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/12/24/Photo1.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-12-28T08:00:00Z",
      content:
        "Dyson\r\n2022Dyson Zone\r\nImage: Dyson\r\nDyson Zone10,000 RPM 12\r\nZone\r\nZone\r\n11Dyson\r\nANCDyson Zone\r\nAppleAirPods MaxSonyWH-1000XM58Dyson Zone838Zone21\r\nImage: Dyson\r\nDyson Zone40mm6Hz21kHz2,600 mAh3ANC… [+264 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "JC Torres",
      title:
        "vivo iQOO 11 Review: An excellent flagship that will go unnoticed",
      description:
        "vivo iQOO 11 Review: An excellent flagship that will go unnoticedThe year is almost over, but smartphone manufacturers aren’t exactly done yet. Coming up at the last minute is vivo’s performance sub-brand iQOO, presenting to...",
      url: "https://www.yankodesign.com/2022/12/27/vivo-iqoo-11-review-an-excellent-flagship-that-will-go-unnoticed/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2022/12/vivo-iqoo-11-review-an-excellent-flagship-that-will-go-unnoticed/P1092590.jpg",
      publishedAt: "2022-12-28T04:20:36Z",
      content:
        'PROS:\r\n<ul><li>High-end specs in a "vanilla" model</li><li>Large, fast-charging battery</li><li>Decent cameras especially at night</li></ul>\r\nCONS:\r\n<ul><li>No dust or water resistance rating</li><li… [+11086 chars]',
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Julie Hay",
      title: "Séries : 5 pépites sorties cette année et à rattraper d’urgence",
      description:
        "L'année 2022 a été riche en découvertes sérielles. Si vous avez manqué ces pépites, il est encore temps de rattraper votre retard. \nSéries : 5 pépites sorties cette année et à rattraper d’urgence",
      url: "https://www.journaldugeek.com/dossier/series-5-pepites-sorties-cette-annee-et-a-rattraper-durgence/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/12/5-series-a-ne-pas-manquer-en-2022.jpg",
      publishedAt: "2022-12-28T09:01:01Z",
      content:
        "L'année 2022 a été riche en découvertes sérielles. Si vous avez manqué ces pépites, il est encore temps de rattraper votre retard.Cette année a été très chargée sur les plateformes SVOD. Netflix, Dis… [+6108 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Nokia espera que los móviles desaparezcan en menos de diez años. Apuesta por la misma tecnología que Apple",
      description:
        "La cantidad de noticias tecnológicas que salen cada día puede que nos esté distrayendo de algo que se acerca a pasos agigantados y que va a cambiar el panorama de la electrónica de consumo para siempre. No será mañana, ni el año que viene, pero se acerca una …",
      url: "https://www.applesfera.com/rumores/nokia-espera-que-moviles-desaparezcan-diez-anos-apuesta-tecnologia-que-apple",
      urlToImage: "https://i.blogs.es/29c72e/hero/840_560.jpeg",
      publishedAt: "2022-12-28T08:57:56Z",
      content:
        "La cantidad de noticias tecnológicas que salen cada día puede que nos esté distrayendo de algo que se acerca a pasos agigantados y que va a cambiar el panorama de la electrónica de consumo para siemp… [+3276 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Los fallos de seguridad tienen efectos inesperados. Este hace que el iPhone se parezca mucho más a un Samsung",
      description:
        "A medida que los sistemas operativos de Apple han evolucionado y han incluido más opciones de personalización y habilidades, el jailbreak ha perdido popularidad entre los usuarios de iPhone. Aunque el jailbreak ya no es tan popular como antes, la personalizac…",
      url: "https://www.applesfera.com/seguridad/fallos-seguridad-tienen-efectos-inesperados-este-hace-que-iphone-se-parezca-mucho-a-samsung",
      urlToImage: "https://i.blogs.es/a821d8/hero/840_560.jpeg",
      publishedAt: "2022-12-28T07:35:33Z",
      content:
        "A medida que los sistemas operativos de Apple han evolucionado y han incluido más opciones de personalización y habilidades, el jailbreak ha perdido popularidad entre los usuarios de iPhone. Aunque e… [+2200 chars]",
    },

    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Amber Love Bond, Contributor, \n Amber Love Bond, Contributor\n https://www.forbes.com/sites/amberlovebond/",
      title: "28 Bartenders Share Their Favorite Hangover Remedies",
      description:
        "From greasy take out to hot soup and special hydrating concoctions, here are several ways bartenders around the country combat that crappy feeling after a long night out.",
      url: "https://www.forbes.com/sites/amberlovebond/2022/12/28/28-bartenders-share-their-favorite-hangover-remedies/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/63a879c9e464b1cd388f074c/0x0.jpg?format=jpg&crop=3433,1931,x0,y0,safe&width=1200",
      publishedAt: "2022-12-28T13:00:00Z",
      content:
        "Get rid of your hangover ASAP with these remedies \r\ngetty\r\nWeve all been there. You went out and had a great night, but youve woken up and have that terrible hangover feeling. Perhaps you didnt drink… [+12317 chars]",
    },
  ];
 static defaultProps={
   country : 'in ',
   pageSize:8

 }
 static propTypes={
 country:propTypes.string,
 pageSize:propTypes.number,
 }

  constructor() {
    // to use constructor we must use super function
    super();
    console.log("This is Constructor.");
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
    };
  }
  // we use fetch api to check current news
  // componentdidmount function run before render function
  async componentDidMount() {
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){


    }
   else{
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=37b87f6cd92547b2b2a8412020b64370&page=1&pageSize-${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    //  in below we provide outcome of parsedData to aticles
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults });

   }
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37b87f6cd92547b2b2a8412020b64370&page=${this.state.page-1}&pageSie${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  };
  handleNextClick = async () => {
   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country={this.country.props}&apiKey=37b87f6cd92547b2b2a8412020b64370&page=${this.state.page+1}&pageSize${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  }
  };

  render() {
    console.log("this is render");
    return (
      <div className="container my-3">
        <h2 className="text-center" >NewsMonkey Top 10 Headlines of Today</h2>
        {this.state.loading&&<Spiner/>}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3">
                <NewsItem
                  key={element.Url}
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &laquo; Previos
          </button>
          <button
          disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
