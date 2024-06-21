import Head from "next/head";
import {data} from "~/data";
import {resolveTimeStr} from "~/resolveTimeStr";
import {capitalizeFirstLetter} from "~/capitalizeFirstLetter";
import ImageGallery from "react-image-gallery";


export default function Home() {
  const items = data.items;

  return (
    <>
      <Head>
        <title>Резюме - Андрей Дьяконов</title>
        <meta name="description" content="Резюме - Андрей Дьяконов"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="container mx-auto">
        <div className="flex flex-col py-8 gap-2">
          <h1 className="text-4xl">Резюме - Андрей Дьяконов</h1>
          <a className="text-xl" href="https://github.com/Sveagruva" target="_blank" rel="noreferrer">Github -
            @sveagruva</a>
          <a className="text-xl" href="https://t.me/sveagruva">Телеграм - @sveagruva</a>
        </div>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col py-2">
              <h2 className="text-2xl md:text-4xl">{item.url === undefined ? item.name :
                <a className="opacity-75 hover:opacity-100" href={item.url} target="_blank"
                   rel="noreferrer">{item.name}</a>}</h2>
              <p className="">{item.fields.join(", ")}</p>
              <p>{item.technologies.join(", ")}</p>
              <p className="pb-2">{capitalizeFirstLetter(resolveTimeStr(item.from))} - {resolveTimeStr(item.to)}</p>
              <p className="text-lg">{item.description}</p>
              {
                item.sourceCode.map((sourceCode, index) => (
                  <div key={index} className="flex flex-col">
                    <a className="opacity-75 hover:opacity-100" style={{
                      wordBreak: "break-all"
                    }} href={sourceCode} target="_blank" rel="noreferrer">
                      {sourceCode}
                    </a>
                  </div>
                ))
              }
              {
                item.images !== undefined &&
                  <div className="mt-4">
                      <ImageGallery items={item.images.map(item => ({
                        original: `/images/${item}`,
                        thumbnail: `/images/${item}`,
                        // thumbnailClass: "h-[50vh]"
                      }))}
                      />
                  </div>

              }
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
