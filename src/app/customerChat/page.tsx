
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-[90vh] max-h-[800px] w-full max-w-[800px] mx-auto bg-background rounded-2xl shadow-lg overflow-hidden">
      <header className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 shrink-0">
        <img src="/placeholder.svg" alt="Company Logo" width={32} height={32} />
        <h2 className="text-lg font-medium">Walmart Customer Care</h2>
      </header>
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[70%]">
            <p>Hello how can I assist you today?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%]">
            <p>I am having an issue with my recent order. Can you help me?</p>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[70%]">
            <p>Sure I would be happy to help Can you please provide more details about the issue </p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%]">
            <p>
              but it hasnt arrived yet The tracking number shows till in transit.
            </p>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[70%]">
            <p>I apologize for the delay Let me look into that for you Can you please provide the order number</p>
          </div>
        </div>
      </div>
      <div className="bg-muted px-4 py-3 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-lg border-none focus:ring-0 focus:ring-offset-0 resize-none"
        />
        <Button variant="ghost" size="icon" className="rounded-full">
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}

function SendIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}