import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const PenguinParadise = () => {
  return (
    <Card size="lg">
      <CardHeader>
        <CardTitle className="text-lg">Penguin Paradise</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>Welcome to the penguin paradise page</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button>Play Game</Button>
        <Button variant="neutral">View Github</Button>
      </CardFooter>
    </Card>
  )
}
