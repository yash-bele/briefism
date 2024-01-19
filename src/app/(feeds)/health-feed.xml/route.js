import RSS from "rss";
import { health } from "@/data/health";
import { healthHistory } from "@/history/health";
const baseUrl = "https://www.briefism.com";

export async function GET() {
  const feed = new RSS({
    title: "Latest News, Entertainment, Technology and More | Briefism",
    description:
      "Stay informed with Briefism. Get the latest news in a nutshell, delivered with clarity and brevity.",
    generator: "RSS for Node and Next.js",
    site_url: `${baseUrl}`,
    feed_url: `${baseUrl}/health-feed.xml`,
    managingEditor: "briefism@gmail.com",
    webMaster: "briefism@gmail.com",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Briefism`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  [...health, ...healthHistory].map((i) => {
    feed.item({
      title: i.title,
      description: i.preArticle,
      url: `${baseUrl}/health/${i.id}`,
      date: i.timestamp,
      // author: "Yash Bele",
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
