
import Card from "./components/Card";
const App = () => {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      company: "Tesla",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      datePosted: "8 weeks ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      company: "Oracle",
      datePosted: "12 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      company: "Adobe",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Gurgaon, India"
    }
  ];
  return (
    <div className="parent">
      {jobs.map(function (elem,idx) {
        return <div key={idx}>
          <Card companyN={elem.company} logo={elem.brandLogo} date={elem.datePosted} postt={elem.post}
            tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}
          />
        </div>
      })}
    </div>
  );
};

export default App;
