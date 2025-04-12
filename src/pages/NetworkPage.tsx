
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare, ThumbsUp, Share2, User, UsersRound, UserPlus, Search, MapPin, Briefcase } from 'lucide-react';

const NetworkPage = () => {
  const { toast } = useToast();
  
  const handleConnect = (name: string) => {
    toast({
      title: "Connection Request Sent",
      description: `Your connection request to ${name} has been sent.`,
    });
  };
  
  const handleMessage = (name: string) => {
    toast({
      title: "Message Feature",
      description: "Messaging feature will be available soon!",
    });
  };

  const professionals = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      connections: 483,
      skills: ["JavaScript", "React", "Node.js", "AWS"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Data Scientist",
      company: "Microsoft",
      location: "Seattle, WA",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      connections: 352,
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    },
    {
      id: 3,
      name: "Michael Smith",
      title: "Product Manager",
      company: "Amazon",
      location: "New York, NY",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg",
      connections: 624,
      skills: ["Product Strategy", "User Research", "Agile", "Market Analysis"],
    },
    {
      id: 4,
      name: "Priya Patel",
      title: "UX Designer",
      company: "Adobe",
      location: "San Jose, CA",
      imageUrl: "https://randomuser.me/api/portraits/women/67.jpg",
      connections: 278,
      skills: ["Figma", "User Testing", "Wireframing", "Prototyping"],
    },
    {
      id: 5,
      name: "David Wilson",
      title: "Cloud Architect",
      company: "IBM",
      location: "Austin, TX",
      imageUrl: "https://randomuser.me/api/portraits/men/92.jpg",
      connections: 391,
      skills: ["AWS", "Azure", "Kubernetes", "Terraform"],
    },
    {
      id: 6,
      name: "Emma Thompson",
      title: "Frontend Developer",
      company: "Netflix",
      location: "Los Angeles, CA",
      imageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
      connections: 247,
      skills: ["React", "TypeScript", "CSS", "UI/UX"],
    },
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Chen",
        title: "Data Scientist at Microsoft",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      content: "Excited to share that I'll be speaking at the AI Summit next month about my work on machine learning approaches for predictive analytics in healthcare. Looking forward to connecting with fellow data scientists and researchers! #AI #MachineLearning #DataScience",
      timestamp: "2 hours ago",
      likes: 87,
      comments: 23,
      shares: 12,
    },
    {
      id: 2,
      author: {
        name: "David Wilson",
        title: "Cloud Architect at IBM",
        imageUrl: "https://randomuser.me/api/portraits/men/92.jpg",
      },
      content: "Just completed my AWS Solutions Architect certification! It's been a challenging journey but worth every minute. Happy to help anyone who's preparing for this certification. #AWS #CloudComputing #Certification",
      timestamp: "5 hours ago",
      likes: 142,
      comments: 37,
      shares: 9,
    },
  ];

  return (
    <Layout>
      <div className="py-12 bg-blue-50 dark:bg-blue-950/50 min-h-[calc(100vh-16rem)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Professional Network</h1>
            <p className="text-lg text-muted-foreground">
              Connect with professionals worldwide, share insights, and grow your career network
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>U</AvatarFallback>
                      <User className="h-6 w-6" />
                    </Avatar>
                    <div className="flex-grow">
                      <Input placeholder="Share an update or insight..." className="mb-3" />
                      <div className="flex justify-end">
                        <Button>Share</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden animate-fade-in">
                  <CardHeader className="pb-3">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{post.author.name}</CardTitle>
                        <CardDescription>{post.author.title}</CardDescription>
                        <p className="text-xs text-muted-foreground mt-1">{post.timestamp}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{post.content}</p>
                  </CardContent>
                  <CardFooter className="border-t py-3 flex justify-between">
                    <Button variant="ghost" size="sm" onClick={() => toast({ title: "Liked!", description: "You liked this post" })}>
                      <ThumbsUp className="h-4 w-4 mr-2" /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => toast({ title: "Comments", description: "Comments feature coming soon" })}>
                      <MessageSquare className="h-4 w-4 mr-2" /> {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => toast({ title: "Shared!", description: "Post shared" })}>
                      <Share2 className="h-4 w-4 mr-2" /> {post.shares}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Connections</CardTitle>
                  <CardDescription>Professionals you may want to connect with</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professionals.slice(0, 3).map((professional) => (
                    <div key={professional.id} className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={professional.imageUrl} alt={professional.name} />
                        <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <h3 className="font-medium">{professional.name}</h3>
                        <p className="text-sm text-muted-foreground">{professional.title}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Briefcase className="h-3 w-3 mr-1" />
                          <span>{professional.company}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{professional.location}</span>
                        </div>
                        
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" className="h-8 text-xs" onClick={() => handleConnect(professional.name)}>
                            <UserPlus className="h-3 w-3 mr-1" /> Connect
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 text-xs" onClick={() => handleMessage(professional.name)}>
                            <MessageSquare className="h-3 w-3 mr-1" /> Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="ghost" className="w-full text-sm">
                    <UsersRound className="h-4 w-4 mr-2" />
                    See More Connections
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>
                    Networking opportunities in your field
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Tech Career Fair 2025</h3>
                    <p className="text-sm text-muted-foreground">May 15, 2025 • Virtual</p>
                  </div>
                  <div>
                    <h3 className="font-medium">AI & Machine Learning Summit</h3>
                    <p className="text-sm text-muted-foreground">June 8-10, 2025 • San Francisco</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Global Developer Conference</h3>
                    <p className="text-sm text-muted-foreground">July 22-24, 2025 • New York</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Industry Groups</CardTitle>
                  <CardDescription>
                    Connect with professionals in your field
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Software Engineering Professionals
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Data Science Network
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Product Managers Guild
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    UX/UI Designers Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NetworkPage;
