'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { credCheck } from '../server/action'
import { useState } from "react"




export default function LoginForm() {
  const { toast } = useToast()
  const nav = useRouter()
  const [log, setLog] = useState(true)

  async function check() {
    setLog(false)
    let uname = document.querySelector('.uname').value
    let pass = document.querySelector('.pass').value
    console.log(uname, "HI", pass)
    if (uname && pass) {

      let bool = await credCheck(uname, pass)
      console.log(bool)
      if (bool) {
        toast({
          description: `Welcome ${uname}`,
        })
        nav.push('/Statistics')
      }
      else {
        setLog(true)
        toast({
          description: "Not Authorized",
        })
      }
    }
    else {
      toast({
        description: "Enter All Fields",
      })
      setLog(true)
    }
  }



  return (
    <div className="log-cov">

      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="m@example.com"
                required
                className="uname"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required className="pass" />
            </div>
            {log ? (<Button className="w-full" onClick={check}>
              Login
            </Button>) : (<Button className="w-full flex gap-4">
              <div class="loader">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              Login
            </Button>)}

            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/Signin" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
