
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Sample data for job statistics
const countrySalaryData = [
  { country: 'United States', 'Software Engineer': 110000, 'Data Scientist': 130000, 'Product Manager': 125000 },
  { country: 'United Kingdom', 'Software Engineer': 70000, 'Data Scientist': 85000, 'Product Manager': 80000 },
  { country: 'Germany', 'Software Engineer': 75000, 'Data Scientist': 90000, 'Product Manager': 85000 },
  { country: 'India', 'Software Engineer': 25000, 'Data Scientist': 30000, 'Product Manager': 35000 },
  { country: 'Canada', 'Software Engineer': 85000, 'Data Scientist': 95000, 'Product Manager': 90000 },
];

const countryDemandData = [
  { country: 'United States', 'Software Engineer': 120000, 'Data Scientist': 80000, 'Product Manager': 50000 },
  { country: 'United Kingdom', 'Software Engineer': 50000, 'Data Scientist': 35000, 'Product Manager': 20000 },
  { country: 'Germany', 'Software Engineer': 60000, 'Data Scientist': 40000, 'Product Manager': 25000 },
  { country: 'India', 'Software Engineer': 150000, 'Data Scientist': 90000, 'Product Manager': 45000 },
  { country: 'Canada', 'Software Engineer': 45000, 'Data Scientist': 30000, 'Product Manager': 18000 },
];

const growthRateData = [
  { name: 'AI/ML Engineer', value: 28 },
  { name: 'Data Scientist', value: 22 },
  { name: 'Backend Developer', value: 18 },
  { name: 'UI/UX Designer', value: 15 },
  { name: 'Cloud Architect', value: 25 },
  { name: 'DevOps Engineer', value: 20 },
  { name: 'Mobile Developer', value: 12 },
  { name: 'Blockchain Developer', value: 17 },
];

// Industry-specific data
const industryData = {
  'Information Technology': [
    { role: 'Software Engineer', demand: 'Very High', avgSalary: '$110,000', growth: '+22%' },
    { role: 'Data Scientist', demand: 'High', avgSalary: '$130,000', growth: '+28%' },
    { role: 'DevOps Engineer', demand: 'High', avgSalary: '$125,000', growth: '+20%' },
    { role: 'UI/UX Designer', demand: 'Moderate', avgSalary: '$95,000', growth: '+15%' },
  ],
  'Healthcare': [
    { role: 'Medical Scientist', demand: 'High', avgSalary: '$95,000', growth: '+18%' },
    { role: 'Health Informatics', demand: 'High', avgSalary: '$105,000', growth: '+15%' },
    { role: 'Biomedical Engineer', demand: 'Moderate', avgSalary: '$90,000', growth: '+12%' },
  ],
  'Finance': [
    { role: 'Financial Analyst', demand: 'Moderate', avgSalary: '$85,000', growth: '+10%' },
    { role: 'Investment Banker', demand: 'Moderate', avgSalary: '$120,000', growth: '+7%' },
    { role: 'Fintech Developer', demand: 'High', avgSalary: '$115,000', growth: '+20%' },
    { role: 'Quantitative Analyst', demand: 'High', avgSalary: '$140,000', growth: '+15%' },
  ],
  'Engineering': [
    { role: 'Mechanical Engineer', demand: 'Moderate', avgSalary: '$85,000', growth: '+5%' },
    { role: 'Civil Engineer', demand: 'Moderate', avgSalary: '$80,000', growth: '+4%' },
    { role: 'Electrical Engineer', demand: 'High', avgSalary: '$95,000', growth: '+8%' },
    { role: 'Chemical Engineer', demand: 'Moderate', avgSalary: '$100,000', growth: '+6%' },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

const JobStatistics = () => {
  const [selectedChart, setSelectedChart] = useState('salary');
  const [selectedIndustry, setSelectedIndustry] = useState('Information Technology');
  const { toast } = useToast();
  
  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    toast({
      title: `Selected industry: ${value}`,
      description: `Showing job statistics for ${value} industry.`,
    });
  };
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/4">
          <Card className="h-full">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle>Global Job Market Comparison</CardTitle>
                  <CardDescription>Compare job markets across different countries</CardDescription>
                </div>
                <Tabs defaultValue="salary" onValueChange={setSelectedChart} className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="salary">Salary</TabsTrigger>
                    <TabsTrigger value="demand">Job Openings</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={selectedChart === 'salary' ? countrySalaryData : countryDemandData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip formatter={(value) => {
                      return selectedChart === 'salary' 
                        ? `$${new Intl.NumberFormat().format(value as number)}` 
                        : new Intl.NumberFormat().format(value as number);
                    }} />
                    <Legend />
                    <Bar dataKey="Software Engineer" fill="#0088FE" />
                    <Bar dataKey="Data Scientist" fill="#00C49F" />
                    <Bar dataKey="Product Manager" fill="#FFBB28" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full md:w-1/4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Job Growth Rate</CardTitle>
              <CardDescription>Annual growth rate by role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={growthRateData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                    >
                      {growthRateData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle>Industry-Specific Job Insights</CardTitle>
              <CardDescription>Detailed job statistics by industry</CardDescription>
            </div>
            <Select onValueChange={handleIndustryChange} defaultValue={selectedIndustry}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(industryData).map((industry) => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-left">Demand</th>
                  <th className="py-3 px-4 text-left">Average Salary (US)</th>
                  <th className="py-3 px-4 text-left">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                {industryData[selectedIndustry as keyof typeof industryData].map((item, index) => (
                  <tr key={index} className="border-b hover:bg-blue-50 dark:hover:bg-blue-900/10">
                    <td className="py-3 px-4 font-medium">{item.role}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        className={
                          item.demand === 'Very High' ? 'bg-green-500' :
                          item.demand === 'High' ? 'bg-blue-500' :
                          item.demand === 'Moderate' ? 'bg-yellow-500' : 'bg-gray-500'
                        }
                      >
                        {item.demand}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{item.avgSalary}</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">{item.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobStatistics;
