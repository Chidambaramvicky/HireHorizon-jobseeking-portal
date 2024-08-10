import { Box, useTheme } from "@mui/material";
import Header from "../../component/Header1";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I add a new job posting?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To add a new job posting, navigate to the "Jobs" section in the admin dashboard and click on the "Add New Job" button. Fill in the required details and click "Save" to publish the job.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I manage company profiles?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the "Companies" section of the admin dashboard, you can view, add, edit, or remove company profiles. Simply click on the desired action for the company you wish to manage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I schedule automated email notifications for applicants?

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the "Notifications" section, you can set up automated email notifications. Choose the event trigger (e.g., when an applicant is shortlisted) and customize the email content before enabling the automation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Where can I view the details of applicants?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To view applicant details, go to the "Applicants" section. You can see a list of applicants, their resumes, and the jobs they've applied for. Use the "Manage" option to update applicant status or assign them to specific jobs.To view applicant details, go to the "Applicants" section. You can see a list of applicants, their resumes, and the jobs they've applied for. Use the "Manage" option to update applicant status or assign them to specific jobs.To view applicant details, go to the "Applicants" section. You can see a list of applicants, their resumes, and the jobs they've applied for. Use the "Manage" option to update applicant status or assign them to specific jobs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I add or manage companies on the platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Navigate to the "Companies" section. Here, you can add new companies by clicking "Add Company" or manage existing ones by selecting "Edit" or "Delete" for each company profile.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ1;
