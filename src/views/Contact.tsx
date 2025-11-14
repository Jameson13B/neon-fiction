import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Contact = () => {
  return (
    <Card size="xl">
      <CardHeader>
        <CardTitle className="text-lg">Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <h2 className="text-xl">Contact Page Coming Soon</h2>
          <br />
          <p>
            In the meantime, you can{" "}
            <a className="underline" href="mailto:jameson13b@icloud.com">
              send us an email
            </a>
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  )
}
