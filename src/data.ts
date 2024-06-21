// date format: YYYY-MM
type DateFormat = string;

type WorkItem = {
  name: string,
  description: string,
  technologies: string[],
  fields: string[],
  sourceCode: string[],
  url?: string,
  from: DateFormat,
  to: DateFormat,
  images?: string[],
}

type WorkItemCategory = {
  name: string,
  description: string,
  from: DateFormat,
  to: DateFormat,
  items: WorkItem[],
}

export const data = {
  // {
  //   name: "Flutter",
  //   description: "Изучение Flutter",
  //   from: "2020-09",
  //   to: "2021-03",
  //   items: [
  //     {
  //       name: "Flutter Калькулятор с анимациями нажатия",
  //       description: "Изучение и применение анимаций на Flutter",
  //       technologies: ["Flutter", "Dart"],
  //       fields: ["Android", "iOS"],
  //       sourceCode: ["https://github.com/Sveagruva/flutter_cool_calculator"],
  //       from: "2021-02",
  //       to: "2021-02"
  //     },
  //   ]
  // },
  // {
  //   name: "Расширения для браузера",
  //   description: "Разработка расширений для браузера",
  //   from: "2020-09",
  //   to: "2021-03",
  //   items: [
  //     {
  //       name: "Ubnight - Темная тема для браузера",
  //       description: "Разработка браузерного расширения для адаптивной темной темы",
  //       technologies: ["JavaScript"],
  //       fields: ["Browser Extension"],
  //       sourceCode: ["https://github.com/Sveagruva/Ubnight"],
  //       from: "2020-11",
  //       to: "2020-11",
  //     },
  //     {
  //       name: "Убрать ютуб кнопку \"смотреть на телевизоре\"",
  //       description: "Разработка и подержка браузерного расширения для удаления кнопки \"смотреть на телевизоре\" на ютубе",
  //       technologies: ["JavaScript"],
  //       fields: ["Browser Extension"],
  //       sourceCode: ["https://github.com/Sveagruva/remove_youtube_tv_button"],
  //       url: "https://chromewebstore.google.com/detail/lcblinegofgihklfnclgedlfcolbacpl?hl=ru",
  //       from: "2020-12",
  //       to: "2024-06"
  //     },
  //   ]
  // },
  // {
  //   name: "Блокчейн",
  //   description: "Разработка смарт-контрактов на языке Solidity программное проведение транзакций и отслеживание транзакций. Изучение работы Ethereum",
  //   from: "2020-12",
  //   to: "2023-04",
  //   items: [
  //     {
  //       name: "Код для минимальной работы с Ethereum",
  //       description: "Минимальные примеры для работы с Ethereum",
  //       technologies: ["Solidity", "JavaScript", "TypeScript", "Node.js", "Ethereum"],
  //       fields: ["Blockchain", "Solidity"],
  //       sourceCode: ["https://github.com/Sveagruva/blockchainEthBasics"],
  //       from: "2021-09",
  //       to: "2021-09"
  //     },
  //     {
  //       name: "Разработка простого контракта обещаний",
  //       description: "Разработка простого контракта обещаний",
  //       technologies: ["Solidity", "Ethereum"],
  //       fields: ["Blockchain", "Solidity"],
  //       sourceCode: ["https://github.com/Sveagruva/BlockChainPromise"],
  //       from: "2022-02",
  //       to: "2022-02"
  //     },
  //   ]
  // },
  // {
  //   name: "Нативная iOS и MacOS разработка",
  //   description: "Разработка приложений используя Swift (SwiftUI) для iOS и портирование на MacOS",
  //   from: "2020-12",
  //   to: "2023-04",
  //   items: [
  //     {
  //       name: "Винджет календаря с отображением 4 месяцев одновременно",
  //       description: "Разработка винджета календаря для iOS и MacOS с подержкой адаптивной темной темы",
  //       technologies: ["Swift", "SwiftUI"],
  //       fields: ["iOS", "MacOS"],
  //       sourceCode: ["https://github.com/Sveagruva/EssentialWidget"],
  //       from: "2023-02",
  //       to: "2023-02",
  //       images: ["EssentialWidget.png", "EssentialWidget2.png", "EssentialWidget3.png"]
  //     },
  //   ]
  // },
  // {
  //   name: "Кроссплатформенная разработка",
  //   description: "Кроссплатформенная разработка приложений с использованием веб-технологий",
  //   from: "2020-07",
  //   to: "_current_",
  //   items: [
  //     {
  //       name: "Книжная полка",
  //       description: "Книжная полка - приложение для колекции книг и чтения книг в формате epub",
  //       technologies: ["Electron","Node.js", "JavaScript"],
  //       fields: ["MacOS", "Windows", "Linux"],
  //       sourceCode: ["https://github.com/Sveagruva/bookshelf"],
  //       from: "2020-07",
  //       to: "2021-08",
  //       images: [
  //         "Bookshelf1.png",
  //         "Bookshelf2.png",
  //         "Bookshelf3.png",
  //         "Bookshelf4.png",
  //         "Bookshelf5.png",
  //       ]
  //     },
  //   ]
  // },
  items: [
    {
      name: "Разработка и поддержка внутрених сервисов АвтоВаза",
      description: "Работа над внутренними сервисами АвтоВаза и вебсайта lada.ru. Разработка, поддержка и интеграция различных сервисов. Для создания надежных и масштабируемых серверных приложений использовались технологии TypeScript и Node.js. На базе фреймворков NestJS и Express были разработаны API, обеспечивающие взаимодействие между различными компонентами системы. Для управления базами данных и выполнения сложных запросов применялись Sequelize и Postgres, что позволило эффективно работать с SQL-запросами. Также в проектах использовался Golang для высокопроизводительных микросервисов и выполнения вычислительно сложных задач. Весь процесс разработки и развертывания был контейнеризирован с помощью Docker, что обеспечило гибкость и независимость среды выполнения.",
      technologies: ["Typescript", "Go", "Gin", "NestJS", "Express", "Sequelize", "Node.js", "Postgres", "SQL", "Docker", "JavaScript"],
      fields: ["Backend"],
      sourceCode: [],
      url: "https://lada.ru",
      from: "2020-10",
      to: "_current_"
    },
    {
      name: "Разработка бекенда и мобильного приложения для \"Хвост Удачи\"",
      description: "Разработка бекенда и помощь в написании мобильного приложения для \"Хвост Удачи\"",
      technologies: ["Typescript", "NestJS", "Express", "Sequelize", "Node.js", "Postgres", "SQL", "Docker", "Dart", "Flutter"],
      fields: ["Backend", "Android", "iOS"],
      sourceCode: [],
      url: "https://helppet.ru/",
      from: "2021-08",
      to: "2022-02",
      images: ["helppet.png"],
    },
    {
      name: "PlannerKeep - Планировщик задач",
      description: "Разработка web-приложения (бекенд + фронтенд) для планировщика задач",
      technologies: ["Typescript", "NestJS", "Node.js", "Postgres", "SQL", "Docker", "React", "React Query", "Tailwind CSS", "Drizzle", "Zustand"],
      fields: ["Backend", "Web"],
      sourceCode: [],
      url: "https://plannerkeep.com",
      from: "2024-01",
      to: "_current_"
    },
    {
      name: "Приложение для анализа трат",
      description: "Разработка мобильного приложения (бекенд + приложение) для аналитики трат",
      technologies: ["Go", "Sqlite", "SQL", "React", "React Native", "Expo", "Zustand"],
      fields: ["Backend", "Android", "iOS"],
      sourceCode: ["https://github.com/Sveagruva/expenses_tracker_mobile", "https://github.com/Sveagruva/expenses_tracker_backend"],
      from: "2024-01",
      to: "_current_",
      images: ["tracker1.png", "tracker2.png", "tracker3.png", "tracker4.png", "tracker5.png", "tracker6.png", "tracker7.png"],
    },
    {
      name: "Приложение для самозанятых для поиска клиентов",
      description: "Приложение для самозанятых для поиска клиентов",
      technologies: ["React", "React Native", "Expo", "Zustand"],
      fields: ["Android", "iOS"],
      sourceCode: [],
      from: "2024-01",
      to: "2024-03",
      images: ["bandwagon1.png", "bandwagon2.png", "bandwagon3.png"],
    },
    {
      name: "Винджет календаря с отображением 4 месяцев одновременно",
      description: "Разработка винджета календаря для iOS и MacOS с подержкой адаптивной темной темы",
      technologies: ["Swift", "SwiftUI"],
      fields: ["iOS", "MacOS"],
      sourceCode: ["https://github.com/Sveagruva/EssentialWidget"],
      from: "2023-02",
      to: "2023-02",
      images: ["EssentialWidget.png", "EssentialWidget2.png", "EssentialWidget3.png"]
    },
    {
      name: "Книжная полка",
      description: "Книжная полка - приложение для колекции книг и чтения книг в формате epub",
      technologies: ["Electron", "Node.js", "JavaScript"],
      fields: ["MacOS", "Windows", "Linux"],
      sourceCode: ["https://github.com/Sveagruva/bookshelf"],
      from: "2020-07",
      to: "2021-08",
      images: [
        "Bookshelf1.png",
        "Bookshelf2.png",
        "Bookshelf3.png",
        "Bookshelf4.png",
        "Bookshelf5.png",
      ]
    },
    {
      name: "Браузерное расширение - Ubnight Темная тема для браузера",
      description: "Разработка браузерного расширения для адаптивной темной темы",
      technologies: ["JavaScript"],
      fields: ["Browser Extension"],
      sourceCode: ["https://github.com/Sveagruva/Ubnight"],
      from: "2020-11",
      to: "2020-11",
    },
    {
      name: "Браузерное расширение - Убрать ютуб кнопку \"смотреть на телевизоре\"",
      description: "Разработка и подержка браузерного расширения для удаления кнопки \"смотреть на телевизоре\" на ютубе",
      technologies: ["JavaScript"],
      fields: ["Browser Extension"],
      sourceCode: ["https://github.com/Sveagruva/remove_youtube_tv_button"],
      url: "https://chromewebstore.google.com/detail/lcblinegofgihklfnclgedlfcolbacpl?hl=ru",
      from: "2020-12",
      to: "2024-06"
    },
    {
      name: "Пример кода для минимальной работы с Ethereum",
      description: "Минимальные примеры для работы с Ethereum",
      technologies: ["Solidity", "JavaScript", "TypeScript", "Node.js", "Ethereum"],
      fields: ["Blockchain", "Solidity"],
      sourceCode: ["https://github.com/Sveagruva/blockchainEthBasics"],
      from: "2021-09",
      to: "2021-09"
    },
    {
      name: "Разработка простого контракта обещаний",
      description: "Разработка простого контракта обещаний",
      technologies: ["Solidity", "Ethereum"],
      fields: ["Blockchain", "Solidity"],
      sourceCode: ["https://github.com/Sveagruva/BlockChainPromise"],
      from: "2022-02",
      to: "2022-02"
    },
    {
      name: "Библиотека подержки zod схем для nestjs",
      description: "Подержка zod схем для nestjs с документирование, валидацией и типизацией",
      technologies: ["Typescript", "NestJS", "Node.js"],
      fields: ["Backend"],
      sourceCode: ["https://github.com/Sveagruva/zod-for-nestjs"],
      url: "https://www.npmjs.com/package/zod-for-nestjs",
      from: "2023-12",
      to: "_current_"
    },
    {
      name: "Flutter Калькулятор с анимациями нажатия",
      description: "Изучение и применение анимаций на Flutter",
      technologies: ["Flutter", "Dart"],
      fields: ["Android", "iOS"],
      sourceCode: ["https://github.com/Sveagruva/flutter_cool_calculator"],
      from: "2021-02",
      to: "2021-02"
    },
  ]
} satisfies {
  items: WorkItem[]
} as {
  items: WorkItem[]
}
