import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <Card size="xl">
        <CardHeader>
          <CardTitle
            className="text-3xl text-[var(--main)]"
            style={{
              textShadow: `1px 1px 0 var(--main-foreground)`,
            }}
          >
            Welcome to Neon Fiction!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p className="max-w-2xl mx-auto">
              A collection of <em>fun</em>, <em>unique</em>, and{" "}
              <em>nostalgic</em> games, but with a modern innovative twist. Neon
              Fiction turns some of your favorite board and card games, along
              with some new ones, into a modern digital experience. We are a
              tribute to that time of game nights with friends and family.
            </p>
            <br />
            <br />
            <div className="flex gap-4 justify-center">
              <div className="w-1/3">
                <strong className="text-base">Current games include:</strong>
                <ul className="list-disc list-inside max-w-fit mx-auto mt-2">
                  <li className="italic text-sm">
                    Vault.io (Neon Fiction O.G.)
                  </li>
                  <li className="italic">Penguin Paradise (Coming Soon)</li>
                  <li className="italic">Neon Airways (In the studio)</li>
                </ul>
              </div>

              <div className="w-1/3">
                <strong className="text-base">
                  Future games in consideration:
                </strong>
                <ul className="list-disc list-inside max-w-fit mx-auto mt-2">
                  <li className="italic">Original Stratego</li>
                  <li className="italic">Modern Guess Who</li>
                  <li className="italic">Pai Gow Poker</li>
                </ul>
              </div>
            </div>
            <br />
            <p className="max-w-lg mx-auto">
              We are always adding new games to our collection, so be sure to
              check back often. If you have any suggestions for games you'd like
              to see, please let us know.
            </p>
            <br />
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
