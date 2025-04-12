
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FilePlus, Image, Save, Trash, Plus, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    imageUrl: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    location: string;
    graduationDate: string;
    fieldOfStudy: string;
  }>;
  skills: string[];
}

const ResumeBuilder = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('personal');
  
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      imageUrl: '',
    },
    summary: '',
    experience: [
      {
        id: '1',
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    education: [
      {
        id: '1',
        degree: '',
        institution: '',
        location: '',
        graduationDate: '',
        fieldOfStudy: '',
      },
    ],
    skills: [''],
  });

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeData(prev => ({
      ...prev,
      summary: e.target.value,
    }));
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };

    setResumeData(prev => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          title: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    if (resumeData.experience.length === 1) return;
    
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    
    setResumeData(prev => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    setResumeData(prev => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          degree: '',
          institution: '',
          location: '',
          graduationDate: '',
          fieldOfStudy: '',
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    if (resumeData.education.length === 1) return;
    
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    
    setResumeData(prev => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleSkillChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;

    setResumeData(prev => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  const removeSkill = (index: number) => {
    if (resumeData.skills.length === 1) return;
    
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    
    setResumeData(prev => ({
      ...prev,
      skills: updatedSkills,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, we'd upload this to a server and get a URL back
      // For now we'll create an object URL
      const imageUrl = URL.createObjectURL(file);
      setResumeData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          imageUrl,
        },
      }));
    }
  };

  const handleDownloadResume = () => {
    // In a real app, this would generate a PDF
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded as a PDF.",
    });
  };

  const handleSaveResume = () => {
    toast({
      title: "Resume Saved",
      description: "Your resume has been saved successfully.",
    });
  };

  const nextTab = () => {
    if (activeTab === 'personal') setActiveTab('experience');
    else if (activeTab === 'experience') setActiveTab('education');
    else if (activeTab === 'education') setActiveTab('skills');
    else if (activeTab === 'skills') setActiveTab('preview');
  };

  const prevTab = () => {
    if (activeTab === 'preview') setActiveTab('skills');
    else if (activeTab === 'skills') setActiveTab('education');
    else if (activeTab === 'education') setActiveTab('experience');
    else if (activeTab === 'experience') setActiveTab('personal');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Resume Builder</CardTitle>
        <CardDescription>
          Create a professional resume in minutes. Fill in your details and download your personalized resume.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={resumeData.personalInfo.fullName}
                  onChange={handlePersonalInfoChange}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="title">Professional Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={resumeData.personalInfo.title}
                  onChange={handlePersonalInfoChange}
                  placeholder="Software Engineer"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  placeholder="johndoe@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={resumeData.personalInfo.location}
                onChange={handlePersonalInfoChange}
                placeholder="San Francisco, CA"
              />
            </div>
            
            <div>
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea
                id="summary"
                value={resumeData.summary}
                onChange={handleSummaryChange}
                placeholder="Brief summary of your professional background and career goals..."
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="profileImage">Profile Image</Label>
              <div className="flex items-center gap-4 mt-2">
                {resumeData.personalInfo.imageUrl && (
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={resumeData.personalInfo.imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <Label
                  htmlFor="profileImage"
                  className="cursor-pointer flex items-center gap-2 text-sm border rounded-md px-3 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Image className="h-4 w-4" />
                  {resumeData.personalInfo.imageUrl ? 'Change Image' : 'Upload Image'}
                </Label>
                <Input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6 mt-4">
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="space-y-4 border rounded-md p-4 relative">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Experience {index + 1}</h3>
                  {resumeData.experience.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeExperience(index)}
                      title="Remove experience"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`title-${index}`}>Job Title</Label>
                    <Input
                      id={`title-${index}`}
                      name="title"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Software Engineer"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`company-${index}`}>Company</Label>
                    <Input
                      id={`company-${index}`}
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Google"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`location-${index}`}>Location</Label>
                    <Input
                      id={`location-${index}`}
                      name="location"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Mountain View, CA"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                    <Input
                      id={`startDate-${index}`}
                      name="startDate"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="June 2020"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`endDate-${index}`}>End Date</Label>
                    <Input
                      id={`endDate-${index}`}
                      name="endDate"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Present"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor={`description-${index}`}>Description</Label>
                  <Textarea
                    id={`description-${index}`}
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            ))}
            
            <Button type="button" variant="outline" className="w-full" onClick={addExperience}>
              <Plus className="h-4 w-4 mr-2" /> Add Another Experience
            </Button>
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6 mt-4">
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="space-y-4 border rounded-md p-4 relative">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Education {index + 1}</h3>
                  {resumeData.education.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeEducation(index)}
                      title="Remove education"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`degree-${index}`}>Degree</Label>
                    <Input
                      id={`degree-${index}`}
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`fieldOfStudy-${index}`}>Field of Study</Label>
                    <Input
                      id={`fieldOfStudy-${index}`}
                      name="fieldOfStudy"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Computer Science"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`institution-${index}`}>Institution</Label>
                    <Input
                      id={`institution-${index}`}
                      name="institution"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Stanford University"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`location-${index}`}>Location</Label>
                    <Input
                      id={`location-${index}`}
                      name="location"
                      value={edu.location}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Stanford, CA"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor={`graduationDate-${index}`}>Graduation Date</Label>
                  <Input
                    id={`graduationDate-${index}`}
                    name="graduationDate"
                    value={edu.graduationDate}
                    onChange={(e) => handleEducationChange(index, e)}
                    placeholder="May 2018"
                  />
                </div>
              </div>
            ))}
            
            <Button type="button" variant="outline" className="w-full" onClick={addEducation}>
              <Plus className="h-4 w-4 mr-2" /> Add Another Education
            </Button>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6 mt-4">
            <div className="space-y-4">
              <h3 className="font-medium">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e)}
                      placeholder={`Skill ${index + 1}`}
                    />
                    {resumeData.skills.length > 1 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeSkill(index)}
                        title="Remove skill"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" onClick={addSkill}>
                <Plus className="h-4 w-4 mr-2" /> Add Skill
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="mt-4">
            <div className="border rounded-lg p-6 space-y-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold">{resumeData.personalInfo.fullName || 'Your Name'}</h1>
                  <p className="text-muted-foreground">{resumeData.personalInfo.title || 'Professional Title'}</p>
                </div>
                
                {resumeData.personalInfo.imageUrl && (
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src={resumeData.personalInfo.imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {resumeData.personalInfo.email && (
                  <div>{resumeData.personalInfo.email}</div>
                )}
                {resumeData.personalInfo.phone && (
                  <>
                    <div>•</div>
                    <div>{resumeData.personalInfo.phone}</div>
                  </>
                )}
                {resumeData.personalInfo.location && (
                  <>
                    <div>•</div>
                    <div>{resumeData.personalInfo.location}</div>
                  </>
                )}
              </div>
              
              {resumeData.summary && (
                <div>
                  <h2 className="text-lg font-semibold mb-2 border-b pb-1">Summary</h2>
                  <p className="text-sm">{resumeData.summary}</p>
                </div>
              )}
              
              {resumeData.experience.some(exp => exp.title || exp.company) && (
                <div>
                  <h2 className="text-lg font-semibold mb-2 border-b pb-1">Experience</h2>
                  <div className="space-y-4">
                    {resumeData.experience
                      .filter(exp => exp.title || exp.company)
                      .map((exp, i) => (
                        <div key={i} className="text-sm">
                          <div className="flex justify-between">
                            <div>
                              <span className="font-medium">{exp.title}</span>
                              {exp.company && <span> at {exp.company}</span>}
                              {exp.location && <span> - {exp.location}</span>}
                            </div>
                            <div className="text-muted-foreground">
                              {exp.startDate && <span>{exp.startDate}</span>}
                              {exp.startDate && exp.endDate && <span> - </span>}
                              {exp.endDate && <span>{exp.endDate}</span>}
                            </div>
                          </div>
                          {exp.description && <p className="mt-1">{exp.description}</p>}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              {resumeData.education.some(edu => edu.degree || edu.institution) && (
                <div>
                  <h2 className="text-lg font-semibold mb-2 border-b pb-1">Education</h2>
                  <div className="space-y-4">
                    {resumeData.education
                      .filter(edu => edu.degree || edu.institution)
                      .map((edu, i) => (
                        <div key={i} className="text-sm">
                          <div className="flex justify-between">
                            <div>
                              <span className="font-medium">{edu.degree}</span>
                              {edu.fieldOfStudy && <span> in {edu.fieldOfStudy}</span>}
                              {edu.institution && <span> from {edu.institution}</span>}
                              {edu.location && <span> - {edu.location}</span>}
                            </div>
                            <div className="text-muted-foreground">
                              {edu.graduationDate && <span>{edu.graduationDate}</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              {resumeData.skills.some(skill => skill !== '') && (
                <div>
                  <h2 className="text-lg font-semibold mb-2 border-b pb-1">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills
                      .filter(skill => skill !== '')
                      .map((skill, i) => (
                        <div key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-center mt-6 space-x-4">
              <Button onClick={handleSaveResume}>
                <Save className="h-4 w-4 mr-2" /> Save
              </Button>
              <Button onClick={handleDownloadResume}>
                <Download className="h-4 w-4 mr-2" /> Download PDF
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={prevTab}
          disabled={activeTab === 'personal'}
        >
          Previous
        </Button>
        
        <Button type="button" onClick={nextTab} disabled={activeTab === 'preview'}>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeBuilder;
