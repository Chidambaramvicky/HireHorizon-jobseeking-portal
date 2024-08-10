import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { blue } from '@mui/material/colors';
import Navbar from './Navbar';
import ApplyForm2 from './ApplyForm2';
import { useParams } from 'react-router-dom';

// Sample job data (unchanged)
const jobData = {
  // Job data here...
  1: {
    title: 'Full Stack Developer',
    company: 'Impleox Tech',
    date: '09 Nov - 10 Dec',
    salary: '₹ 5 - 6 Lacs P.A.',
    location: 'Chennai',
    experience: '2-4 Yrs',
    qualification: 'Bachelors degree or equivalent experience in a relevant field',
    tags: ['Data Entry Operator', 'Data entry operation', 'Data entry', 'Operating', 'Data'],
    rating: 4.9,
    reviews: '87 Reviews',
    type: 'Exclusive For Men and Women',
    posted: '11 Days ago',
    highlights: [
      'Experience as an intern or doing projects in the above skills',
      'We\'re seeking an eager and proactive fresher for the Full Stack Developer (MEAN / MERN) position',
      'As a fresher, you\'ll have the exciting opportunity to learn and contribute to translating technical needs into functional code while collaborating closely with our development team',
      'Experience as an intern or doing projects in the above skills.'
    ],
    description: [
      'Work on front-end development using JavaScript frameworks (e.g., IONIC, Angular, React, React Native, Vue.js).',
      'Engage in back-end development with Node.js or Python using Rest Frameworks.',
      'Utilize both NoSQL and Relational databases.',
      'Explore Cloud services like Amazon AWS, Microsoft Azure, or Google Cloud for application support.',
      'Contribute to the creation of new and innovative products from scratch.',
      'Adapt and learn new technologies and frameworks for practical application.'
    ],
  },
  // Add other job details here, matching the id used in JobSearchPage
  2: { 
    "title": "Data Entry Operator - Non-Voice Process",
  "company": "TechVision Solutions",
  "date": "01 Dec - 15 Dec",
  "salary": "₹ 3 - 4 Lacs P.A.",
  "location": "Mumbai",
  "experience": "0-2 Yrs",
  "qualification": "High School diploma or equivalent; additional certification in data entry or relevant field is a plus",
  "tags": ["Data Entry", "Non-Voice", "Office Administration", "Data Processing"],
  "rating": 4.5,
  "reviews": "65 Reviews",
  "type": "Full-Time",
  "posted": "5 Days ago",
  "highlights": [
    "No previous experience required; training will be provided",
    "Ability to work with large volumes of data accurately",
    "Familiarity with basic office software and data entry tools",
    "Strong attention to detail and organizational skills",
    "Opportunity to develop and advance within the company"
  ],
  "description": [
    "Perform data entry tasks and update databases with accuracy and efficiency.",
    "Verify and correct data discrepancies and errors.",
    "Assist with generating reports and data summaries as required.",
    "Manage and maintain data records in an organized manner.",
    "Handle various administrative tasks such as filing, scanning, and document management.",
    "Work collaboratively with team members to ensure data quality and project deadlines are met."
  ],
  },
  3: { 
"title": "WFH - Data Entry",
  "company": "RemoteData Solutions",
  "date": "15 Nov - 15 Dec",
  "salary": "₹ 4 - 5 Lacs P.A.",
  "location": "Remote",
  "experience": "1-3 Yrs",
  "qualification": "High School diploma or equivalent; proficiency in data entry tools and remote work technologies",
  "tags": ["Data Entry", "Remote Work", "Data Management", "Virtual Assistant"],
  "rating": 4.7,
  "reviews": "102 Reviews",
  "type": "Remote",
  "posted": "10 Days ago",
  "highlights": [
    "Flexible work hours and remote work environment",
    "No commuting required; work from the comfort of your home",
    "Opportunity to work with a dynamic and innovative team",
    "Training and support provided for remote work setup",
    "Ideal for individuals with strong time-management skills and self-discipline"
  ],
  "description": [
    "Conduct data entry tasks and manage data entry projects from home.",
    "Ensure data accuracy and completeness while meeting deadlines.",
    "Utilize various software and online tools for data management and reporting.",
    "Maintain confidentiality and security of sensitive data.",
    "Collaborate with team members through virtual meetings and communication tools.",
    "Adapt to new software and tools as needed for project requirements."
  ],
   },
  
    4: { 
"title": "Hiring For HDFC | On Roll Job",
  "company": "HDFC Sales",
  "date": "01 Sep - 30 Sep",
  "salary": "₹ 2.5 - 3.5 Lacs P.A.",
  "location": "Chennai",
  "experience": "1 - 3 Yrs",
  "qualification": "Bachelor's degree or equivalent experience in Sales or a related field",
  "tags": ["Sales", "Banking", "Home Loans", "Insurance", "Field Sales", "Direct Sales"],
  "rating": 4.3,
  "reviews": "78 Reviews",
  "type": "On Roll",
  "posted": "15 Days ago",
  "highlights": [
    "Opportunity to work with one of India's leading financial institutions",
    "On-roll employment with HDFC, offering job security and benefits",
    "Competitive salary with performance-based incentives",
    "Comprehensive training provided to enhance your sales skills",
    "Career growth opportunities within a reputed organization"
  ],
  "description": [
    "Identify and generate leads for home loan and insurance products.",
    "Engage with clients to understand their financial needs and offer suitable solutions.",
    "Promote HDFC’s products and services through direct sales and field visits.",
    "Maintain and build relationships with existing and potential clients.",
    "Achieve sales targets and contribute to the growth of the organization.",
    "Participate in regular training and development sessions to stay updated with market trends and product knowledge."
  ],
}
};

const JobDetail = () => {
  const { id } = useParams(); // Get the job id from the URL
  const job = jobData[id]; // Get the job data based on id

  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);
  const [salaryInfo, setSalaryInfo] = useState({
    avgSalary: '5.1 LPA',
    minSalary: '3.5 LPA',
    maxSalary: '8.5 LPA',
  });

  const handleSaveClick = () => {
    setIsSaved(!isSaved); // Toggle the saved state
  };

  const handleCompareSalaryClick = () => {
    // Simulate fetching new salary data (You can replace this with an actual API call)
    setSalaryInfo({
      avgSalary: '6.2 LPA',
      minSalary: '4.0 LPA',
      maxSalary: '9.0 LPA',
    });
  };

  const handleApplyClick = () => {
    setIsApplyFormOpen(true);
  };

  const handleFormSubmit = () => {
    setIsApplied(true);
    setIsApplyFormOpen(false);
  };

  const handleCloseForm = () => {
    setIsApplyFormOpen(false);
  };

  if (!job) return <Typography variant="h6">Job not found</Typography>;

  return (
    <div>
      <Navbar />
      <Box sx={{ p: 3, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
        <Grid container spacing={3}>
          {/* Left Section: Job Details and Highlights */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" component="div" fontWeight="bold">
                {job.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {job.company}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {job.experience}
                </Typography>
                <MonetizationOnIcon fontSize="small" sx={{ mx: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  {job.salary}
                </Typography>
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Posted: {job.posted} | {job.reviews}
              </Typography>
              <Button
                variant={isSaved ? 'contained' : 'outlined'}
                sx={{ mr: 2 }}
                startIcon={isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                onClick={handleSaveClick}
              >
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <Button 
                variant="contained" 
                sx={{ bgcolor: blue[700] }} 
                onClick={handleApplyClick}
              >
                {isApplied ? 'Applied' : 'Apply Now'}
              </Button>
            </Paper>

            {/* Job Highlights */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mt: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Job highlights
              </Typography>
              {job.highlights.map((highlight, index) => (
                <Typography variant="body2" sx={{ mb: 1 }} key={index}>
                  • {highlight}
                </Typography>
              ))}
            </Paper>

            {/* Job Description */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mt: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Job description
              </Typography>
              {job.description.map((desc, index) => (
                <Typography variant="body2" sx={{ ml: 2, mb: 1 }} key={index}>
                  • {desc}
                </Typography>
              ))}
            </Paper>
          </Grid>

          {/* Right Section: Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Jobs you might be interested in
              </Typography>

              {/* Job 1 */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  Wanted For Software Developer - Chennai
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Client company | Chennai | Posted 7 days ago
                </Typography>
              </Box>

              <Divider />

              {/* Job 2 */}
              <Box sx={{ mb: 2, mt: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  Front End Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Virdhi Tech Lab | Chennai(Adambakkam) | Posted 8 days ago
                </Typography>
              </Box>

              <Divider />

              {/* Job 3 */}
              <Box sx={{ mb: 2, mt: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  Software Engineer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Glory Global Solutions | Chennai | Posted 6 days ago
                </Typography>
              </Box>

              <Divider />

              {/* Job 4 */}
              <Box sx={{ mb: 2, mt: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  Web Developer Freshers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hello Projects | Coimbatore | Posted 7 days ago
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ mb: 2, mt: 2 }}>
                <Typography variant="body1" fontWeight="bold">
                  Software Associate Freshers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Oasis Technology| Chennai | Posted 9 days ago
                </Typography>
              </Box>
            </Paper>

            {/* Right Side Box */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Compare Average Salary
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Average Salary: {salaryInfo.avgSalary}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Minimum Salary: {salaryInfo.minSalary}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Maximum Salary: {salaryInfo.maxSalary}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleCompareSalaryClick}
              >
                Compare Salary
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Apply Form Dialog */}
      {isApplyFormOpen && (
        <ApplyForm2 
          jobTitle={job.title}
          onClose={handleCloseForm} 
          onFormSubmit={handleFormSubmit} 
        />
      )}
    </div>
  );
};

export default JobDetail;
