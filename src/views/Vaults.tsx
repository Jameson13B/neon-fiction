import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Vaults = () => {
  return (
    <Card size="lg">
      <CardHeader>
        <CardTitle className="text-lg">Vault.io</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className="max-w-2xl mx-auto">
            <strong>Vault.io</strong> is a dice game about balancing risk and
            reward to vault the most money. Take big risks to earn a few big
            rewards, or play it safe to earn many small rewards.{" "}
            <em>
              Which approach will take you to the top? The choice is yours.
            </em>
          </p>
          <br />
          <p>
            Just watch out for the final <em>Risk It Round!</em> which can
            change the outcome last minute. So keep fighting til the very end
            and vault to the top.
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button>Play Game</Button>
        <Button variant="neutral">View Github</Button>
      </CardFooter>
    </Card>
  )
}
