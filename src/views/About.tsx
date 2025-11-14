import { ExternalLinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

export const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card size="lg">
        <CardHeader>
          <CardTitle className="text-lg">About Neon Fiction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p>
              What started as a personal project for <strong>Jameson</strong>, a
              simple score keeper app, has grown into a full-fledged game
              development studio. After a game night with{" "}
              <strong>Chris Brown</strong> using the score keep app, they
              decided it was time to build their own game. This is where{" "}
              <Link className="underline" to="/vault">
                <strong>Vault.io</strong>
              </Link>
              , the original game from Neon Fiction was born.
            </p>
            <br />
            <p>
              Following the success and reception of <em>Vault.io</em>, they
              decided to build a second game to add to the Neon Fiction
              collection.{" "}
              <Link className="underline" to="/penguin-paradise">
                <strong>Penguin Paradise</strong>
              </Link>
              , a penguin-themed racing game full of excitement, cheering, and
              luck. This is going to be a hit at your next group game night.{" "}
              <strong>Coming Soon!</strong>
            </p>
          </CardDescription>
        </CardContent>
      </Card>
      <Card size="lg">
        <CardHeader>
          <CardTitle className="text-lg">Jameson Brown</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex gap-4">
            <p className="w-1/2 flex flex-col items-center gap-4 justify-center">
              Jameson is a software engineer with 6+ years of experience,
              focused on crafting bold, responsive, and intuitive user
              interfaces. Enjoys playing games with friends and family, cooking,
              traveling, and making experimental pico-brews.
              <Button
                onClick={() =>
                  window.open(
                    "https://jamesonb.com",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Jameson's Site <ExternalLinkIcon />
              </Button>
            </p>
            <img
              className="w-1/2"
              src="https://placehold.co/300x200?text=Jameson+Pic"
            />
          </CardDescription>
        </CardContent>
      </Card>
      <Card size="lg">
        <CardHeader>
          <CardTitle className="text-lg">Christopher Brown</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex gap-4">
            <img
              className="w-1/2"
              src="https://placehold.co/300x200?text=Chris+Pic"
            />
            <p className="w-1/2 flex flex-col items-center gap-4 justify-center">
              Chris is a UI/UX designer and developer.
              <br />
              <em>Chris' bio coming soon.</em>
              <Button
                onClick={() =>
                  window.open(
                    "https://barelyfiction.design",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Chris's Site <ExternalLinkIcon />
              </Button>
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
