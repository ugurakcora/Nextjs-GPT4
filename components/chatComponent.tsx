"use client"
export default function ChatComponent() {
  return (
    <div className="">
      <div>
        <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
        <p>I am a robot with GPT-4</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-2">USER</h3>
        <p>I am a user</p>
      </div>
      <form className="mt-12">
        <p>User Message</p>
        <textarea className="mt-2 w-full bg-slate-600 p-2" placeholder={'What are data structures and algorithims?'}/>
        <button className="rounded-md bg-blue-600 p-2 mt-2">Send Message</button>
      </form>
    </div>
  );
}