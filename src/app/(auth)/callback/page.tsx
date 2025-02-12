import { CreateUser, GetUserById } from "@/api/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AuthCallback = async () => {
  const user = await currentUser();

  console.log(user);

  if (!user?.id) {
    return redirect("/login");
  }

  const existingUser = await GetUserById();

  if (!existingUser) {
    CreateUser(
      user.id,
      user.fullName ? user.fullName : "",
      user.emailAddresses[0].emailAddress,
      user.imageUrl
    );
  }

  redirect("/dashboard");
};

export default AuthCallback;
