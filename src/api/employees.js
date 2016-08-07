const employees =  [
    {
        id: "2813a9b5-d5d0-4b3a-a7bb-a7f275516b1d",
        firstName: "Gabriella",
        lastName:"Boon",
        avatar: "/src/images/gabriella-boon.png",
        role:".NET Developer",
        team:"Modern Apps",
        biography:"Gabriella Boon has been a .NET developer since 2011 having build various solutions using ASPNET as well as mobile development using Xamarin. With background mostly in server side development Gabriella is in her element when developing decoupled services and designing SQL database solutions.",
        keySkills: [
            {
                name:"ASP.NET MCV / WEBAPI"
            },
             {
                name:"SQL"
            },
            {
                name:"Epi Server"
            },
            {
                name:"Azure Configuration"
            },
            {
                name:"ASP.NET Web Forms"
            },
            {
                name:"Xamarin"
            }
        ],
        recentProjects: [
            {
                name:"City Council - Mobility solution"
            },
             {
                name:"Mircosoft - Showcase project"
            },
            {
                name:"Azure SQL database migraiton - On premise to cloud"
            },
            {
                name:"Craig and Smiths - Farming supplies web site"
            }
        ],
    },
    {
        id: "8c5b25d5-64bb-411b-a1af-4fe1394e50a4",
        firstName: "Rowanne",
        lastName:"Everett",
        avatar: "/src/images/rowanne-everett.png",
        role:"CRM consultant",
        team:"Dynamics",
        biography:"Rowanne has 10 years experience designing, building and delivering high quality CRM solutions for companies in New Zealand and the United Kingdom. Her passion lies in finding the underlying business needs of each client she works with and immersing herself in the business.",
        keySkills: [
            {
                name:"CRM On-Prmise",
            },
            {
                name:"CRM Online",
            },
            {
                name:"Agile Methodologies",
            },
            {
                name:"Consultancy",
            }
        ],
        recentProjects: [
            {
                name:"John Jones Advertising - CRM Online Implementation"
            },
            {
                name:"Argudenture - CRM Upgrade"
            },
            {
                name:"Ministry of Health - Migration from on-premise to CRM Online"
            }
        ],
    },
    {
        id: "1191fdcd-0641-44f5-9380-792b1a92a44b",
        firstName: "Heath",
        lastName:"Kendrick",
        avatar: "/src/images/heath-kendrick.png",
        role:"Front-End developer",
        team:"Modern Apps",
        biography:"Heath started his career as a graphic designer but after learning basic HTML and JavaScript he quickly began to shift focus on his career. With a strong enphasis on usability and asthetics Health has delivered slick mobile and web interfaces for over 4 years.",
        keySkills: [
            {
                name:"HTML5"
            },
            {
                name:"JavaScript"
            },
            {
                name:"Angular 1.x"
            },
            {
                name:"Bootstrap"
            }
        ],
        recentProjects: [
            {
                name:"Erics Astroturf - Rostering system"
            },
            {
                name:"Gardeneers - Public website"
            },
            {
                name:"Crafty Crafts - Event mobile app"
            }
        ],
    },
    {
        id: "af0034a0-19a4-4aed-9c2c-52d9d599d1ac",
        firstName: "Kathlyn",
        lastName:"Marley",
        avatar: "/src/images/kathlyn-marley.png",
        role:"UX Designer",
        team:"Digital",
        biography:"Kathleen is an expert in both user experience and design thinking. Embeding herself in clients for weeks or months to fully understand the needs of the end users, as well as spotting areas where business could be improved or optimised.",
        keySkills: [
            {
                name:"Graphic Design"
            },
            {
                name:"User testing"
            },
            {
                name:"Story Boarding"
            },
            {
                name:"Consulting"
            }
        ],
        recentProjects: [
            {
                name:"Farmiculture - Mobility solution"
            },
            {
                name:"Police - Crisis alert system"
            },
            {
                name:"Grand central society - Public website"
            }
        ],
    },
    {
        id: "cde5028a-0106-46d2-a616-09f39694c6eb",
        firstName: "Pete",
        lastName:"Elliot",
        avatar: "/src/images/pete-elliot.png",
        role:"IOS Developer",
        team:"Digital",
        biography:"",
        keySkills: [
            {
                name:"Swift"
            },
            {
                name:"Objective C"
            },
            {
                name:"X Code"
            }
        ],
        recentProjects: [
            {
                name:"City Council - Mobility solution"
            },
            {
                name:"Fake Construction - Inventory App"
            }
        ],
    },
    {
        id: "88fe44f8-a01b-4ed0-a0da-793be90b3c25",
        firstName: "Andy",
        lastName:"Dawson",
        avatar: "/src/images/andy-dawson.png",
        role:"Senior .NET Developer",
        team:"Modern Apps",
        biography:"Andy has been developing softare since the late 90s using a variety of technologies until he learned .NET back on version 2 and has never looked back. With a hand in both front-end and back-end development Andry has also become very familiar with the fast paced JavaScript world and coninutes to push himself to learn new technologies.",
        keySkills: [
            {
                name:"ASP.NET MCV / WEBAPI"
            },
            {
                name:"React Native"
            },
            {
                name:"React"
            },
            {
                name:"ASP.NET Web Forms"
            }
        ],
        recentProjects: [
            {
                name:"Spectappular - Back end integration system"
            },
            {
                name:"Rotecom Healthcare - Windows 10 Tablet Application"
            },
            {
                name:"Steel and Frame - Rostering system"
            }
        ],
    }
]

export const getLocation = (id) =>{
    let location
    debugger
    location = employees.filter((value) => {
        return value && (value.id === id)
    })[0]
    return location
}

export default employees