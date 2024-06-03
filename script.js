const data = [
    {
        "company_name": "Microsoft Corporation",
        "img_src": "https://pbs.twimg.com/profile_images/1378221311076409346/2evbtaoV_400x400.png",
        "about": "Microsoft Corporation, based in Redmond, Washington, is among the world's biggest corporations and ranks first on a list of the Top 10 IT Companies. Microsoft Windows, Microsoft Office, and Internet Explorer, among other products, are used by nearly every business and professional around the world. Microsoft was established in 1975, by Bill Gates and Paul Allen"
    },
    {
        "company_name": "IBM",
        "img_src": "https://pbs.twimg.com/profile_images/1677090954350583811/Xy93qVY4_400x400.jpg",
        "about": "International Business Machines abbreviated as IBM. This is an American multinational company that operates in over 150 countries. The firm began as a computer recording firm before being called IBM (International Business Machines) in 1924. IBM's headquarters are in Armonk, Future York"
    },
    {
        "company_name": "Accenture",
        "img_src": "https://pbs.twimg.com/profile_images/1552786622936129536/JVw0DfVn_400x400.jpg",
        "about": "Accenture is one of the major Information Technology (IT) businesses and is included in the Fortune Global 500. It is a multinational management consulting business that offers professional services such as strategies, consultancy, technologies, and operation."
    },
    {
        "company_name": "Oracle",
        "img_src": "https://pbs.twimg.com/profile_images/1580919426081251330/z11bDhy-_400x400.jpg",
        "about": "Oracle Corporation, one of the top 10 IT companies in the world, is headquartered in Redwood Shores, California, is a well-known American multinational company. With a workforce of around 130,000, Oracle has the second largest revenue in the software development industry after Microsoft."
    },
    {
        "company_name": "SAP",
        "img_src": "https://pbs.twimg.com/profile_images/1674968203150106629/Tk3283YB_400x400.jpg",
        "about": "SAP has effectively established itself as the global leader in corporate application areas of software and software-related operations. SAP is the third biggest software firm by market value, with more than 88,000 professionals in much more than 130 countries. SAP has about 380,000 clients in far more than 170 countries."
    },
    {
        "company_name": "TCS - Tata Consultancy Services",
        "img_src": "https://tse4.mm.bing.net/th?id=OIP.iz0l2PLYQDTZgy32ELt1UAHaEa&pid=Api&P=0&h=180",
        "about": "Tata Consultancy Services which is abbreviated as TCS. This MNC has been named as one of the leading Indian Multinational Information Technology Corporation, with income generated across multiple areas. TCSs headquarters are in Mumbai, India, and it has numerous functional domains such as consultation systems, software developments, infrastructural support, and business processes outsourcing."
    },
    {
        "company_name": "DXC",
        "img_src": "https://pbs.twimg.com/profile_images/1456120072909594624/XVQLNd9A_400x400.jpg",
        "about": "DXC is an IT services firm that was founded when HPE merged its IT division with CSC. DXC Technology, founded in 2017 as a combination of HPE and CSC, has grown to become one of the world's largest IT firms. As of now, the corporation has broad activities in over 72 nations all over the globe."
    },
    {
        "company_name": "Deloitte Consulting",
        "img_src": "https://pbs.twimg.com/profile_images/1686480282457661441/6arVzd-P_400x400.png",
        "about": "Deloitte is among the world's leading service companies, serving clients worldwide with services ranging from management consulting to IT technology consulting. Deloitte refers to the chain of member companies of Deloitte Touche Tohmatsu Limited, an organization established in the United Kingdom."
    },
    {
        "company_name": "Capgemini",
        "img_src": "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png",
        "about": "Capgemini is among the world's largest information technology (IT) organizations, with a significant global presence. Capgemini, a French company with its headquarters in Paris, with worldwide functioning in over 42 nations."
    },
    {
        "company_name": "Cognizant",
        "img_src": "https://tse1.mm.bing.net/th?id=OIP.SWQ9tBc7e6bwXye9FQc3jAHaEK&pid=Api&P=0&h=180",
        "about": "Cognizant is a major Information technology MNC which helps customers in changing their traditional businesses, operations, and technologies to reap the benefits of quickly altering digital technologies. Thus making it one of the leading IT companies in the world."
    },
    {
        "company_name": "Zensar",
        "img_src":"https://pbs.twimg.com/profile_images/1545016797350744064/Xxt_JFUA_400x400.jpg",
        "about":"Zensar is a technology consulting and services company with 10,000 associates in 33 global locations. More than 130 leading enterprises depend on our expertise to be more disruptive, agile, and competitive."
    }
];

function createTableRow(company) {
    return `
        <tr>
            <td>${company.company_name}</td>
            <td><img src="${company.img_src}" alt="${company.company_name} logo"></td>
            <td>${company.about}</td>
        </tr>
    `;
}

const tableBody = document.querySelector('#companiesTable tbody');
data.forEach(company => {
    tableBody.insertAdjacentHTML('beforeend', createTableRow(company));
});
