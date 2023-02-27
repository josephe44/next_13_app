import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
    
      <div>
        <Link href={`/blog/peter_obi_voter_result`}>Blog Post</Link>
      </div>
      <form>
        <input type="text" name="name" id="name" placeholder="enter name" />
        <input type="email" name="email" id="email" placeholder="enter email" />
        <button>Send Message</button>
      </form>
    </div>
  );
}
