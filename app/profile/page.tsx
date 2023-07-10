import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/configs/auth";

export const metadata: Metadata = {
  title: 'Profile | Next App',
}

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>{session?.user?.name} profile</h1>
      {session?.user?.image && <img src={session.user.image} alt="photo" />}
    </div>
  )
}
