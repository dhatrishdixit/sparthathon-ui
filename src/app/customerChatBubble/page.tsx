import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1 flex flex-col gap-4 p-4">
        <div className="flex justify-start">
          <div className="bg-blue-500 text-white px-4 py-3 rounded-full max-w-[75%] flex items-center">
            <div className="rounded-full bg-white text-blue-500 w-8 h-8 flex items-center justify-center mr-2">AI</div>
            <span>Recommendation...</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-pink-500 text-white px-4 py-3 rounded-full max-w-[75%] flex items-center">
            <span>Recommendation...</span>
            <div className="rounded-full bg-white text-pink-500 w-8 h-8 flex items-center justify-center ml-2">You</div>
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <div className="bg-pink-500 text-white px-4 py-3 rounded-md flex items-center justify-center">
            <span>Product</span>
          </div>
          <div className="bg-pink-500 text-white px-4 py-3 rounded-md flex items-center justify-center">
            <span>Product</span>
          </div>
          <div className="bg-pink-500 text-white px-4 py-3 rounded-md flex items-center justify-center">
            <span>Product</span>
          </div>
          <div className="bg-pink-500 text-white px-4 py-3 rounded-md flex items-center justify-center">
            <span>Product</span>
          </div>
        </div>
      </main>
      <div className="bg-gray-100 p-4 flex items-center">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button className="ml-4 rounded-md px-4 py-2">Send</Button>
      </div>
    </div>
  )
}