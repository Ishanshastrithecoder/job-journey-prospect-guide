
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileText, User, Calendar, MessageSquare, CheckSquare, Clock, Edit } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const activityData = [
  { month: 'Jan', applications: 5, interviews: 2 },
  { month: 'Feb', applications: 8, interviews: 3 },
  { month: 'Mar', applications: 12, interviews: 5 },
  { month: 'Apr', applications: 10, interviews: 4 },
  { month: 'May', applications: 15, interviews: 7 },
  { month: 'Jun', applications: 18, interviews: 8 },
];

const upcomingInterviews = [
  { 
    id: 1, 
    company: 'Google', 
    role: 'Senior Software Engineer',
    date: 'April 15, 2025',
    time: '10:00 AM',
    status: 'Confirmed',
    type: 'Technical Interview'
  },
  { 
    id: 2, 
    company: 'Microsoft', 
    role: 'Product Manager',
    date: 'April 18, 2025',
    time: '2:00 PM',
    status: 'Confirmed',
    type: 'Case Study'
  },
  { 
    id: 3, 
    company: 'Amazon', 
    role: 'Data Scientist',
    date: 'April 22, 2025',
    time: '11:30 AM',
    status: 'Scheduled',
    type: 'Behavioral Interview'
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const pieData = [
  { name: 'Technical Skills', value: 75 },
  { name: 'Experience', value: 65 },
  { name: 'Education', value: 90 },
  { name: 'Industry Knowledge', value: 80 }
];

const DashboardPage = () => {
  return (
    <Layout>
      <div className="py-8 bg-blue-50 dark:bg-blue-950/50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center">
                    <Avatar className="w-24 h-24 border-4 border-blue-500">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile Picture" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="mt-4">John Doe</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge className="mb-2">2 Years Experience</Badge>
                  <p className="text-sm text-muted-foreground mb-4">San Francisco, CA</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="h-4 w-4 mr-2" /> Edit Profile
                  </Button>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground border-t pt-4">
                  <div className="text-center">
                    <p className="font-bold">142</p>
                    <p>Connections</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">38</p>
                    <p>Applications</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">12</p>
                    <p>Interviews</p>
                  </div>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Career Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={70}
                          fill="#8884d8"
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 mt-4">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span>{item.value}%</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { 
                    title: "Profile Views", 
                    value: "247", 
                    change: "+22%", 
                    icon: <User className="h-5 w-5 text-blue-500" /> 
                  },
                  { 
                    title: "Applications", 
                    value: "38", 
                    change: "+5", 
                    icon: <FileText className="h-5 w-5 text-green-500" /> 
                  },
                  { 
                    title: "Interviews", 
                    value: "12", 
                    change: "+3", 
                    icon: <MessageSquare className="h-5 w-5 text-orange-500" /> 
                  },
                  { 
                    title: "Offers", 
                    value: "2", 
                    change: "+1", 
                    icon: <CheckSquare className="h-5 w-5 text-purple-500" /> 
                  }
                ].map((stat, index) => (
                  <Card key={index} className="border-l-4" style={{ borderLeftColor: COLORS[index % COLORS.length] }}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-green-600">{stat.change} this month</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full">
                        {stat.icon}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Job Application Activity</CardTitle>
                  <CardDescription>Your applications and interviews over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="applications" 
                          stroke="#0088FE" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="interviews" 
                          stroke="#00C49F" 
                          strokeWidth={2} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Interviews</CardTitle>
                    <CardDescription>Scheduled interviews and preparation status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="border rounded-lg p-4 relative hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{interview.company}</h3>
                            <p className="text-sm text-muted-foreground">{interview.role}</p>
                            <div className="flex items-center text-xs text-muted-foreground mt-2">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{interview.date} at {interview.time}</span>
                            </div>
                            <div className="flex items-center text-xs mt-1">
                              <Badge variant="outline" className="text-blue-500 border-blue-200 bg-blue-50 dark:bg-blue-900/20">
                                {interview.type}
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <Badge className={interview.status === 'Confirmed' ? 'bg-green-500' : 'bg-yellow-500'}>
                              {interview.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3 border-t pt-3">
                          <div className="flex items-center text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>Preparation: 75% complete</span>
                          </div>
                          <Button size="sm">Prepare</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      View All Interviews
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Actions</CardTitle>
                    <CardDescription>Personalized recommendations for your job search</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Update your technical skills section",
                        description: "Adding your recent React project could increase profile views by 15%",
                        action: "Update Profile"
                      },
                      {
                        title: "Complete interview preparation",
                        description: "You have 2 upcoming technical interviews this week",
                        action: "Practice Now"
                      },
                      {
                        title: "Connect with 3 professionals in your industry",
                        description: "Expanding your network can lead to more opportunities",
                        action: "Find Connections"
                      },
                      {
                        title: "Prepare for Amazon behavioral interview",
                        description: "Use our AI coach to practice STAR responses",
                        action: "Start Practice"
                      }
                    ].map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground my-2">{item.description}</p>
                        <Button size="sm" variant="outline">{item.action}</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
