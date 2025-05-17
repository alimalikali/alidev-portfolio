"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { Save } from "lucide-react"

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-zinc-500 dark:text-zinc-400">Manage your portfolio settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
                <CardDescription>Update your portfolio's general information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" defaultValue="Ali Malik" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" defaultValue="Full-Stack Engineer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" defaultValue="alimalikaili1928@gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+92 307-4608831" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Lahore, Pakistan" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="border-zinc-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>Update your social media profiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" defaultValue="https://github.com/username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" defaultValue="https://linkedin.com/in/username" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter" defaultValue="https://twitter.com/username" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>Customize the appearance of your portfolio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Enable dark mode by default</p>
                  </div>
                  <Switch id="dark-mode" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="animations">Animations</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Enable animations throughout the site</p>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input id="primary-color" defaultValue="#3b82f6" />
                    <div className="w-10 h-10 rounded-md bg-blue-500 border border-zinc-200 dark:border-zinc-800" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize your portfolio for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" defaultValue="Ali | Full-Stack Developer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    defaultValue="Portfolio of Ali, a Full-Stack JavaScript Developer specializing in React, Node.js, and modern web technologies."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" defaultValue="developer, full-stack, javascript, react, node.js" />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Separate keywords with commas</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Advanced Settings</CardTitle>
                <CardDescription>Configure advanced settings for your portfolio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics">Google Analytics</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Enable Google Analytics tracking</p>
                  </div>
                  <Switch id="analytics" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="analytics-id">Google Analytics ID</Label>
                  <Input id="analytics-id" defaultValue="G-XXXXXXXXXX" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="cache">Browser Caching</Label>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Enable browser caching for better performance
                    </p>
                  </div>
                  <Switch id="cache" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-500">Danger Zone</CardTitle>
              <CardDescription>Irreversible actions that affect your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border border-red-200 dark:border-red-900 p-4">
                <h3 className="text-lg font-medium text-red-600 dark:text-red-500 mb-2">Reset Portfolio</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  This will reset all your portfolio data to default values. This action cannot be undone.
                </p>
                <Button variant="destructive">Reset Portfolio</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
