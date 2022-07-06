import React, { useState } from "react";
import { Box } from "react-feather";
import { HomeJumbotron } from "../components/HomeJumbotron";
import ecommerce from "../assets/ecommerce.svg";
import EcomereceRoleSelector from "../components/EcomereceRoleSelector";
import EcomereceProjectsCard from "../components/EcomereceProjectsCard";
import EcomerenceServiceEntry from "../components/EcomerenceServiceEntry";
import EcomereceProcessSelector from "../components/EcomereceProcessSelector";
import EcommerceWorkCodeCard from "../components/EcommerceWorkCodeCard";

export default function ServiceEcomerece() {
  const [role, setRole] = useState("Shopify");
  const [process, setProcess] = useState("Discovery");
  const shopifyPorcess = [
    {
      label: "Discovery",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying your brand identity by defining your market position, competitive offering, and value proposition.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our experts analyzing your websites current performance and propose strategies to achieve goals and targets.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Setting realistic short and long term goals, establishing clear deliverables according to your expectations.",
        },
      ],
    },
    {
      label: "Prototyping & Design",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying opportunities, successful e-commerce practices, and strategic solutions for your business.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "ODesigning a technical ecosystem by leveraging emerging technologies",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Improving your KPI’s, consumer traffic such as loyalty, CR, email subscribers and etc.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Designing an information architecture, engaging your customers, and effectively communicating your brand’s story through visually appealing illustrations.",
        },
      ],
    },
    {
      label: "Shopify Development",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Building an eCommerce platform with the right experts to set up an ecosystem for your Shopify store.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Theme development is where our experts shine. You visualize it, we make it come true!",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "We provide you with out of the box custom solutions that cater to your needs.",
        },
      ],
    },
    {
      label: "Migration and Launch",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our expert Shopify developers make sure your transition from legacy platforms seamlessly, by integrating and syncing all platforms together.",
        },
      ],
    },
    {
      label: "Hyper care and Support",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Throughout any stage of the project, we are here to solve all your problems. Consult with us and we will gladly address your concerns.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "With our technical support team ready to address any technical issues, we make sure that you won't have to face many challenges along the way.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "We offer multiple packages to help you maintain your eCommerce store design, development, and integration even after the completion of the project",
        },
      ],
    },
  ];
  const wordpressPorcess = [
    {
      label: "Discovery",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying your brand identity by defining your market position, competitive offering, and value proposition.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our experts analyzing your websites current performance and propose strategies to achieve goals and targets.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Setting realistic short and long term goals, establishing clear deliverables according to your expectations.",
        },
      ],
    },
    {
      label: "Prototyping & Design",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying opportunities, successful e-commerce practices, and strategic solutions for your business.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "ODesigning a technical ecosystem by leveraging emerging technologies",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Improving your KPI’s, consumer traffic such as loyalty, CR, email subscribers and etc.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Designing an information architecture, engaging your customers, and effectively communicating your brand’s story through visually appealing illustrations.",
        },
      ],
    },
    {
      label: "Migration and Launch",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our expert Shopify developers make sure your transition from legacy platforms seamlessly, by integrating and syncing all platforms together.",
        },
      ],
    },
    {
      label: "Hyper care and Support",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Throughout any stage of the project, we are here to solve all your problems. Consult with us and we will gladly address your concerns.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "With our technical support team ready to address any technical issues, we make sure that you won't have to face many challenges along the way.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "We offer multiple packages to help you maintain your eCommerce store design, development, and integration even after the completion of the project",
        },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Ecomerece Applications"
          info={`We build functional, state of the art, high-performing results-driven ${role} websites.`}
          img={ecommerce}
          talk={true}
        />
        <div className="ecommerce__screen__container">
          <div className="ecommerce__screen__container__role">
            <EcomereceRoleSelector
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 365.944 365.944"
                >
                  <g
                    id="Group_40"
                    data-name="Group 40"
                    transform="translate(-277.5 -2892.5)"
                  >
                    <g id="W_Mark_2_" transform="translate(278 2893)">
                      <path
                        id="Path_106"
                        data-name="Path 106"
                        d="M182.472,10.948a170.4,170.4,0,0,1,66.754,13.473A173.84,173.84,0,0,1,340.508,115.7a172.063,172.063,0,0,1,.015,133.524c-16.97,40.129-50.94,74.22-91.282,91.282a172.063,172.063,0,0,1-133.524.015C75.6,323.553,41.5,289.568,24.436,249.241a172.063,172.063,0,0,1-.015-133.524,173.9,173.9,0,0,1,91.3-91.3,170.4,170.4,0,0,1,66.754-13.473m0-10.948C81.7,0,0,81.7,0,182.472S81.7,364.944,182.472,364.944s182.472-81.7,182.472-182.472S283.242,0,182.472,0Z"
                        strokeWidth="1"
                      />
                      <path
                        id="Path_107"
                        data-name="Path 107"
                        d="M2,154.06A152.084,152.084,0,0,0,87.7,290.914L15.168,92.172A151.473,151.473,0,0,0,2,154.06Zm254.715-7.679c0-18.795-6.751-31.811-12.53-41.938-7.709-12.53-14.932-23.128-14.932-35.658,0-13.974,10.6-26.991,25.531-26.991.669,0,1.308.076,1.962.122A152.032,152.032,0,0,0,27.014,70.533c3.573.122,6.934.182,9.777.182,15.905,0,40.524-1.931,40.524-1.931,8.2-.487,9.154,11.557.973,12.53,0,0-8.242.958-17.4,1.445L116.258,247.47l33.286-99.8L125.853,82.759c-8.181-.471-15.951-1.445-15.951-1.445-8.2-.487-7.223-13,.973-12.53,0,0,25.105,1.931,40.053,1.931,15.905,0,40.539-1.931,40.539-1.931,8.2-.487,9.154,11.557.973,12.53,0,0-8.242.958-17.4,1.445L230,246.208,245.691,196.5C252.625,174.786,256.715,159.4,256.715,146.381ZM156.736,167.35,111.1,299.916a152.026,152.026,0,0,0,93.456-2.418,14.371,14.371,0,0,1-1.095-2.1ZM287.492,81.1a116.53,116.53,0,0,1,1.019,15.632c0,15.419-2.889,32.769-11.572,54.468L230.5,285.485A152.071,152.071,0,0,0,287.492,81.1Z"
                        transform="translate(28.412 28.412)"
                        strokeWidth="1"
                      />
                    </g>
                  </g>
                </svg>
              }
              label="Shopify"
              selected={role}
              setSelected={setRole}
            />
            <EcomereceRoleSelector
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 324.603 367.407"
                >
                  <g
                    id="Group_41"
                    data-name="Group 41"
                    transform="translate(-802 -2890.536)"
                  >
                    <g id="shopify" transform="translate(800.602 2890.536)">
                      <path
                        id="Path_108"
                        data-name="Path 108"
                        d="M222.867,42.865c-.031,0-4.1,1.271-11.007,3.4a76.487,76.487,0,0,0-5.266-12.936c-7.792-14.88-19.212-22.749-33.005-22.764h-.046c-.949,0-1.914.092-2.863.184-.4-.49-.811-.98-1.24-1.439-6-6.43-13.717-9.568-22.948-9.292C128.674.522,110.931,13.4,96.541,36.252,86.407,52.326,78.722,72.533,76.533,88.179,56.065,94.516,41.751,98.941,41.445,99.048c-10.318,3.23-10.639,3.552-12,13.288C28.418,119.7,1.4,328.646,1.4,328.646l224.179,38.761v-325A13.443,13.443,0,0,0,222.867,42.865ZM171.109,58.893,133.3,70.6c3.659-13.992,10.578-27.923,19.09-37.047A38.407,38.407,0,0,1,165.215,24.2C170.16,34.476,171.216,49.05,171.109,58.893ZM146.83,11.865a18.126,18.126,0,0,1,10.716,2.817,51.562,51.562,0,0,0-13.839,10.777c-11.313,12.14-19.978,31-23.437,49.171-10.793,3.337-21.34,6.613-31.061,9.614C95.331,55.617,119.335,12.661,146.83,11.865ZM112.156,174.933c1.209,19.075,51.376,23.238,54.192,67.909,2.22,35.148-18.646,59.183-48.7,61.081-36.067,2.281-55.922-19.013-55.922-19.013l7.639-32.515s19.993,15.079,35.99,14.069c10.456-.658,14.191-9.155,13.808-15.171-1.577-24.876-42.42-23.407-45.007-64.3-2.174-34.4,20.422-69.256,70.266-72.41,19.212-1.209,29.04,3.689,29.04,3.689l-11.4,42.65a64.763,64.763,0,0,0-27.785-4.838C112.171,157.5,111.941,171.427,112.156,174.933ZM182.943,55.219c-.138-9.017-1.209-21.57-5.419-32.424,13.517,2.557,20.177,17.865,22.993,26.989C195.312,51.392,189.372,53.229,182.943,55.219Z"
                        transform="translate(0 0)"
                      />
                      <path
                        id="Path_109"
                        data-name="Path 109"
                        d="M16.527,323.578l93-23.116S69.479,29.745,69.234,27.877a3.592,3.592,0,0,0-3.215-3c-1.347-.107-27.525-.505-27.525-.505S22.528,8.864,16.527,3V323.578Z"
                        transform="translate(216.475 42.941)"
                      />
                    </g>
                  </g>
                </svg>
              }
              label="Wordpress"
              selected={role}
              setSelected={setRole}
            />
          </div>
          <div className="ecommerce__screen__container__selling">
            <div className="ecommerce__screen__container__selling__heading">
              We can help you across multiple stages
            </div>
            <div className="ecommerce__screen__container__selling__content">
              <div className="ecommerce__screen__container__selling__content__left">
                <img
                  src="https://www.codedistrict.com/assets/images/shopify-multi-stage.jpg"
                  alt="ecommerce__screen__container__selling__content__left"
                  className="ecommerce__screen__container__selling__content__left__img"
                />
              </div>
              <div className="ecommerce__screen__container__selling__content__right">
                <div className="ecommerce__screen__container__selling__content__right__entry">
                  You’re just entering into e-commerce, and need a new platform
                  for your online stores.
                </div>
                <div className="ecommerce__screen__container__selling__content__right__entry">
                  You’re already familiar with e-commerce and want to upgrade to
                  a more effective website.
                </div>
                <div className="ecommerce__screen__container__selling__content__right__entry">
                  You’re looking to migrate to Shopify and leverage their
                  ecosystem.
                </div>
              </div>
            </div>
          </div>
          <div className="ecommerce__screen__container__recent__work">
            <div className="ecommerce__screen__container__recent__work__heading">
              Recent Works
            </div>
            <div className="ecommerce__screen__container__recent__work__content">
              <div className="ecommerce__screen__container__recent__work__content___row">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
            </div>
          </div>
          <div className="ecommerce__screen__container__services">
            <div className="ecommerce__screen__container__services__heading">
              Shopify Services
            </div>
            <div className="ecommerce__screen__container__services__content">
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 224.561 231.142"
                  >
                    <g
                      id="Group_42"
                      data-name="Group 42"
                      transform="translate(-290.746 -3575)"
                    >
                      <g
                        id="Group_29"
                        data-name="Group 29"
                        transform="translate(0 -25)"
                      >
                        <path
                          id="Path_110"
                          data-name="Path 110"
                          d="M865.113,269.119q-39.468,0-78.936,0c-12.775-.007-20.842-8.028-20.849-20.787q-.033-53.467.045-106.933c.006-3.05-.444-5.147-3.376-6.976-5.793-3.612-8.1-9.454-8.285-16.126-.116-4.058-.209-8.133.05-12.177a15.529,15.529,0,0,1,1.672-6.369c9.453-17.067,19.055-34.051,28.623-51.054,4.038-7.177,10.11-10.72,18.422-10.708q62.923.083,125.847-.005c8.5-.014,14.62,3.61,18.737,10.959,9.463,16.888,19.023,33.724,28.446,50.634,5.8,10.4,1.563,29.02-7.744,35.989-1.288.964-2.026,3.442-2.031,5.222-.116,35.493-.082,70.988-.089,106.482,0,14.264-7.666,21.85-22.047,21.852Q904.355,269.122,865.113,269.119Zm-91.96-129.4v3.711q0,51.656,0,103.312c0,10.927,3.685,14.634,14.579,14.636q77.8.016,155.6,0c10.646,0,14.469-3.78,14.473-14.29q.02-52.108.005-104.214V139.76L941.72,131.45a19.6,19.6,0,0,1-14.844,6.72c-6.184-.057-11.044-3.1-15.161-7.339-11.25,9.848-19.073,9.839-31.023.042-4.094,4.394-9.038,7.282-15.261,7.293s-11.1-3.04-15.4-7.462c-4.337,4.713-9.331,7.483-15.571,7.469-6.221-.014-11.039-3.144-15.15-7.4-10.683,9.909-18.937,9.9-30.148.769Zm103.6-40.4c-1.134-18.095-2.236-35.685-3.334-53.212H857.506c-1.094,17.91-2.167,35.471-3.25,53.212Zm-42.78-53.371L823.987,99.2h22.5c1.1-17.874,2.19-35.443,3.29-53.25Zm47.195.006c1.134,18.093,2.237,35.674,3.339,53.249h22.5c-3.381-17.941-6.7-35.536-10.035-53.249ZM794.089,99.515c6.858,0,13.018-.1,19.171.048,2.685.066,3.142-1.35,3.536-3.531,1.95-10.776,4.077-21.521,6.084-32.287,1.084-5.814,2.054-11.65,3.163-17.98-3.707,0-6.7-.183-9.654.1a4.1,4.1,0,0,0-2.923,2.066C807.007,64.865,800.691,81.855,794.089,99.515Zm142.784,0c-6.569-17.581-12.88-34.567-19.331-51.5a4.089,4.089,0,0,0-2.87-2.144c-3.075-.285-6.193-.1-9.145-.1a6.26,6.26,0,0,0-.315,1.493c3.047,16.674,6.067,33.354,9.287,49.995.179.92,2.019,2.121,3.12,2.159C923.77,99.624,929.933,99.515,936.873,99.515Zm29.794,0c-9.408-16.709-18.2-32.561-27.25-48.261-3.009-5.218-8.125-6.125-13.7-5.21-.079.428-.25.75-.165.978,6.259,16.844,12.507,33.692,18.9,50.485a3.908,3.908,0,0,0,2.935,1.919C953.516,99.6,959.649,99.512,966.667,99.512Zm-160.846-53.4c-7.412-1.17-12.233,1.1-15.584,7.216-7.786,14.195-15.85,28.236-23.78,42.351-.609,1.085-1.051,2.262-1.771,3.835H775.67c10.166,0,10.185.007,13.682-9.324C794.81,75.633,800.24,61.059,805.821,46.116Zm40.1,61.591H823.127c0,4.272-.258,8.309.061,12.3a11.239,11.239,0,0,0,10.688,10.264c6.138.319,11.026-3.079,11.922-9.167C846.42,116.881,845.919,112.492,845.919,107.707Zm38.54-.057c.216,4.885.023,9.259.691,13.5.875,5.56,5.235,8.979,10.631,9.151,5.655.18,10.641-3.037,11.543-8.6.745-4.584.152-9.386.152-14.052Zm-30.567-.055c0,4.358-.265,8.257.06,12.107a11.248,11.248,0,0,0,10.879,10.583c6.049.251,11.013-3.259,11.89-9.318.627-4.339.122-8.842.122-13.372Zm-61.486.088c0,4.382-.26,8.557.064,12.687.432,5.515,5.35,9.761,10.933,9.926,5.911.175,10.837-3.344,11.542-9.044.541-4.38.108-8.881.108-13.569Zm123.457-.066c0,4.767-.391,9.12.1,13.372.644,5.617,5.229,9.215,10.881,9.312,5.668.1,10.894-3.745,11.532-9.223.51-4.376.1-8.858.1-13.46Zm-154.186-.006c0,4.522-.224,8.709.057,12.863.352,5.21,4.858,9.352,10.115,9.768,5.923.469,11.439-2.876,12.2-8.295.648-4.64.135-9.443.135-14.335Zm207.647.073H946.592c0,4.394-.253,8.575.06,12.712.456,6.042,5.521,10.112,11.79,9.9A11.028,11.028,0,0,0,969.289,119.8C969.469,115.918,969.323,112.019,969.323,107.685Z"
                          transform="translate(-462.85 3562.019)"
                        />
                        <path
                          id="Path_111"
                          data-name="Path 111"
                          d="M835.311,227.965c-4.213-2.221-9.663-3.315-11.41-6.465-2.173-3.917-1.605-9.528-1.654-14.414-.086-8.664,6.959-8.835,13.435-10.114-1.872-4.615-7.383-8.368-4.451-13.5,2.392-4.187,6.043-7.846,9.731-11.056,5.995-5.219,10.8-.389,15.872,3.208,2.005-4.789.836-11.476,6.821-12.958,4.691-1.161,9.866-.992,14.757-.585,7.743.643,7.309,7.5,8.522,12.523,4.225-1.469,8.615-4.542,12.3-3.851,3.869.726,7.125,4.981,10.534,7.832,7.5,6.268,2.829,12.222-1.4,18.406,7.388,1.1,13.974,1.964,13.929,11.317-.067,13.988.2,13.989-12.528,18.528,1.276,4.305,4.221,8.958,3.343,12.717-.935,4-5.359,7.276-8.494,10.65-6.2,6.67-11.611,1.7-16.379-1.44-2.167,4.167-3.23,9.665-6.352,11.356-4.091,2.215-9.813,1.872-14.824,1.811-5.995-.072-7.684-2.707-9.859-13.572-4.5,1.981-8.494,7.405-13.66,4.4-4.167-2.422-7.742-6.175-10.935-9.891C827.461,236.883,832.739,232.144,835.311,227.965ZM914.6,217.587c0-2.354-.171-4.464.038-6.535.373-3.7-.385-5.894-4.854-5.984a8.522,8.522,0,0,1-8.33-5.844c-1.373-3.893.253-7.123,2.687-9.919,2.013-2.313,2.084-4.114-.43-5.964a8.726,8.726,0,0,1-1.909-1.909c-2.378-3.326-4.74-3.752-8.072-.913a11.514,11.514,0,0,1-6.542,2.312c-4.546.219-6.832-2.532-8.224-8.42-.407-1.721-1.214-4.536-2.208-4.709a22.016,22.016,0,0,0-9.758.247c-1.149.341-1.426,3.894-1.945,6.021-1.574,6.442-7.568,8.989-13.208,5.513-1.77-1.092-3.452-2.33-6.2-4.2-1.185,1.56-2.116,3.416-3.588,4.6-3.423,2.755-4.119,5.256-.894,8.806,2.756,3.032,3.548,7.174.643,10.26-2.048,2.175-5.429,3.542-8.45,4.219-2.829.633-3.848,1.561-3.627,4.379.209,2.662.045,5.353.045,7.951,15.53,2.558,17.069,9.332,8.548,20.235l8.076,8.076c4.5-2.262,7.8-7,13.642-4.464,5.638,2.452,4.925,8.009,6.282,12.546H878.09c1.2-4.92.763-10.342,6.542-12.67,5.8-2.335,9.02,2.651,13.272,4.471l8.085-7.8C898.3,223.085,899,221.393,914.6,217.587Z"
                          transform="translate(-469.547 3549.937)"
                        />
                        <path
                          id="Path_112"
                          data-name="Path 112"
                          d="M875.278,238a23.485,23.485,0,0,1-23.341-23.219,23.145,23.145,0,0,1,46.289.071A23.46,23.46,0,0,1,875.278,238Zm-.031-7.928a15.1,15.1,0,0,0,15.191-15.552,15.358,15.358,0,0,0-30.714.336A15.085,15.085,0,0,0,875.248,230.075Z"
                          transform="translate(-472.448 3547.004)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                label="Shopify Store Setup
                "
                info="Build your online store quickly by leveraging our Shopify theme libraries. We can help you get up & running with a Shopify website pretty quickly.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 205.574 218.29"
                  >
                    <g
                      id="Group_43"
                      data-name="Group 43"
                      transform="translate(-704.798 -3584)"
                    >
                      <g
                        id="Group_23"
                        data-name="Group 23"
                        transform="translate(76.993 131)"
                      >
                        <g id="shopify" transform="translate(632.265 3458.232)">
                          <path
                            id="Path_108"
                            data-name="Path 108"
                            d="M126.963,24.3c-.017,0-2.326.72-6.241,1.927a43.365,43.365,0,0,0-2.986-7.334C113.319,10.459,106.844,6,99.024,5.989H99c-.538,0-1.085.052-1.623.1-.226-.278-.46-.555-.7-.816A16.383,16.383,0,0,0,83.661.009C73.559.3,63.5,7.6,55.341,20.554,49.595,29.667,45.238,41.124,44,49.994c-11.6,3.593-19.72,6.1-19.893,6.162-5.85,1.831-6.032,2.014-6.8,7.534C16.717,67.865,1.4,186.33,1.4,186.33l127.1,21.976V24.043A7.621,7.621,0,0,0,126.963,24.3ZM97.618,33.39,76.18,40.03c2.074-7.933,6-15.831,10.823-21a21.775,21.775,0,0,1,7.273-5.3C97.08,19.547,97.679,27.81,97.618,33.39ZM83.852,6.727a10.277,10.277,0,0,1,6.076,1.6,29.234,29.234,0,0,0-7.846,6.11C75.668,21.317,70.755,32.01,68.794,42.313c-6.119,1.892-12.1,3.75-17.611,5.451C54.655,31.533,68.264,7.179,83.852,6.727ZM64.194,99.18c.686,10.815,29.128,13.175,30.725,38.5,1.259,19.928-10.572,33.555-27.609,34.631-20.449,1.293-31.706-10.78-31.706-10.78L39.935,143.1s11.335,8.549,20.405,7.976a8.008,8.008,0,0,0,7.829-8.6c-.894-14.1-24.051-13.271-25.517-36.453C41.419,86.517,54.23,66.754,82.49,64.966c10.893-.686,16.465,2.092,16.465,2.092L92.488,91.239A36.718,36.718,0,0,0,76.735,88.5C64.2,89.294,64.072,97.193,64.194,99.18Zm40.134-67.873c-.078-5.112-.686-12.229-3.073-18.383,7.664,1.449,11.439,10.129,13.036,15.3C111.34,29.137,107.972,30.179,104.327,31.307Z"
                            transform="translate(-1.398 0)"
                            strokeWidth="8"
                          />
                          <path
                            id="Path_109"
                            data-name="Path 109"
                            d="M16.527,184.757l52.727-13.106S46.549,18.164,46.41,17.105a2.037,2.037,0,0,0-1.823-1.7c-.764-.061-15.606-.286-15.606-.286S19.929,6.325,16.527,3V184.757Z"
                            transform="translate(114.784 23.047)"
                            strokeWidth="8"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                }
                label="Development using Shopify Plus
                "
                info="Our Shopify developers know what it takes to build a high volume/transaction eCommerce website. We can build platforms that can handle over 10K+ transactions per minute.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 247.369 247.789"
                  >
                    <g
                      id="Group_44"
                      data-name="Group 44"
                      transform="translate(-1070.34 -3567)"
                    >
                      <g
                        id="Group_24"
                        data-name="Group 24"
                        transform="translate(184.707 -8.491)"
                      >
                        <path
                          id="Path_113"
                          data-name="Path 113"
                          d="M1596.364,110.146q3.289-6.929,6.591-13.852c4.933-10.355,10.035-21.063,14.971-31.631,4.187-8.964,2.354-17.7-4.782-22.793a16.858,16.858,0,0,0-14.457-2.815,17.564,17.564,0,0,0-11.379,10.274c-3.731,8.485-7.223,16.885-10.919,25.778q-2.407,5.788-4.876,11.684l-.263.625-.521-.433a28.077,28.077,0,0,0-18.8-6.992h-.065c-26.119.049-52.67.047-78.356.045q-37.018,0-74.034.038c-16.213.027-26.691,10.6-26.7,26.93q-.017,75.726,0,151.452c0,17.005,10.592,27.571,27.633,27.574q21.285,0,42.579-.057c13.442-.028,27.061-.057,40.752-.057,22,0,44.188.074,66.15.342.133,0,.266,0,.4,0a29.424,29.424,0,0,0,20.912-8.279c5.215-5.26,7.88-12.409,7.709-20.672-.563-27.1-.4-54.664-.25-81.322q.071-12.011.121-24.022a21.277,21.277,0,0,1,1.89-8.534c3.759-8.276,7.741-16.617,11.593-24.684Q1594.319,114.448,1596.364,110.146Zm-26.823,149.34c-.063,10.662-6.524,17.035-17.279,17.049-25.493.031-51.133.046-76.738.046-25.468,0-50.9-.015-76.125-.046-10.869-.013-17.112-6.211-17.125-17.006-.06-48.911-.062-100.352,0-152.9.011-11.054,6.354-17.406,17.4-17.427,46.2-.09,96.039-.081,152.379.027a20.924,20.924,0,0,1,8.151,1.758c6.157,2.692,7.287,5.573,4.652,11.856-4.918,11.732-10,23.864-16.258,35.942l-.949,1.833,0-7.883q0-6.788-.006-13.575c-.017-7.524-.554-8.051-8.178-8.052q-63.817-.012-127.628,0c-7.092,0-7.988.882-7.993,7.847q-.014,17.716,0,35.431c.01,6.125,1.282,7.364,7.565,7.365q46.088.012,92.176.006h36.537l-.288.7c-.39.937-.737,1.851-1.073,2.738a32.26,32.26,0,0,1-2.664,5.846c-.812,1.282-3.082,2.1-4.719,2.117-8.163.1-16.465.093-24.489.087q-6.443,0-12.882.008c-6.13.017-7.457,1.354-7.47,7.526q-.01,5.925-.037,11.851c-.051,13.773-.105,28.015.16,42.013.094,4.963-1.612,8.015-5.886,10.532-2.916,1.718-4.389,3.326-4.505,4.912-.118,1.615,1.159,3.473,3.9,5.681,10.507,8.457,25.7,10.749,39.659,5.977,13.338-4.558,23.046-14.586,25.968-26.825a36.14,36.14,0,0,0,.623-8.379c-.005-1.636-.009-3.327.111-4.977.044-.591.073-1.193.1-1.8a19.3,19.3,0,0,1,1.2-6.969c4.321-9.539,8.926-19.139,13.38-28.422q2.21-4.606,4.411-9.214c.454-.953.938-1.891,1.422-2.83l.862-1.687,1.7.653v.346q0,12.412.018,24.823C1569.644,217.122,1569.667,238.479,1569.541,259.486Zm-65.445-31.2a31.857,31.857,0,0,1,7.387-11.87c5.222-5.379,12.589-6.188,19.222-2.119,6.3,3.866,8.3,9.179,6.5,17.227-3.145,14.041-11.413,21.192-26.018,22.5-2.426.218-4.565.334-6.5.334a26.385,26.385,0,0,1-14.54-3.73l-.687-.4.655-.451C1497.644,244.611,1501.148,237.45,1504.1,228.29Zm-7.879-7.3V182.736h35.129l-2.045,4.952c-1.806,4.377-3.51,8.513-5.295,12.638-.369.85-1.4,2.061-2.372,2.123-10.142.646-17.921,6.043-24.484,16.982Zm36.227-16.506,14.231-33.973,8.764,4.152-16.114,34.068Zm6.079-60.818q.02,3.9.025,7.9v.5H1413.6V120.825l.431-.062c.329-.047.675-.112,1.035-.179a15.167,15.167,0,0,1,2.737-.333q19.887-.015,39.776-.015c24.924,0,50.695-.008,76.042-.067,2.029.018,3.228.315,4,1.1.741.758,1.049,1.9,1,3.711C1538.461,131.143,1538.491,137.225,1538.522,143.663Zm29.2,4.934-7.585,15.978a2.314,2.314,0,0,1-.55.667c-.117.111-.25.239-.4.4l-.253.27-8.334-4.037.149-.423c.2-.565.381-1.117.562-1.66.382-1.152.744-2.24,1.192-3.313q19.887-47.6,39.81-95.189l2.135-5.1c.453-1.082.819-1.906,1.184-2.671,2.385-4.994,6.527-6.843,10.815-4.822a7.439,7.439,0,0,1,3.969,4.516,8.992,8.992,0,0,1-.592,6.541C1595.839,89.393,1581.547,119.49,1567.727,148.6Z"
                          transform="translate(-487.139 3537.019)"
                        />
                        <path
                          id="Path_114"
                          data-name="Path 114"
                          d="M1403.7,247.721c.019,4.957,1.573,6.553,6.394,6.568,14.751.043,30.455.044,48.009,0,5.222-.012,6.654-1.471,6.66-6.788.028-24.545.027-46.916,0-68.393-.007-5.083-1.381-6.48-6.391-6.5-15.2-.058-30.9-.06-48.009-.005-5.337.018-6.646,1.338-6.664,6.723q-.038,11.845-.014,23.691l0,9.778-.005,10.445Q1403.672,235.482,1403.7,247.721Zm9.863-65.7h41.413v62.624h-41.413Z"
                          transform="translate(-486.987 3537.677)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                label="Themes & Customization
                "
                info="Our expert Shopify designers can help your store stand out and ensure that it looks visually amazing on both web and mobile.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 208.004 208.005"
                  >
                    <g
                      id="Group_45"
                      data-name="Group 45"
                      transform="translate(-277.411 -3969)"
                    >
                      <g
                        id="Group_27"
                        data-name="Group 27"
                        transform="translate(0 -0.201)"
                      >
                        <path
                          id="Path_115"
                          data-name="Path 115"
                          d="M868.726,432.182h-.059c-57.388,0-104.086,46.558-104.118,103.819A104.055,104.055,0,0,0,868.366,640.187h.03c57.423,0,104.14-46.567,104.157-103.825C972.569,478.947,925.993,432.213,868.726,432.182ZM775.684,529.92c.268-20.31,9.349-41.407,24.913-57.884,16.572-17.544,38.468-27.825,61.653-28.95l1.049-.051V473.55c.782,0,1.537-.009,2.271-.015,2.18-.015,4.241-.033,6.275.036a10.115,10.115,0,0,1,.006,20.229c-2.037.076-4.09.058-6.265.038-.72-.006-1.458-.012-2.22-.016V530.93h-1q-2.7,0-5.337.007c-6.228.012-12.106.023-18.038-.116-1.447-.035-2.664-2.078-3.027-3.062-3.663-9.946-10.557-15.2-19.935-15.2H816c-9.392.01-16.084,5.164-19.892,15.317-.377,1-1.672,2.9-3.1,2.951-2.8.105-5.632.13-8.43.13-1.322,0-2.637-.006-3.937-.011q-1.978-.009-3.955-.011H775.67Zm87.658,94.173c-.007,1.4-.015,2.815-.015,4.251v1.04l-1.04-.041c-45.26-1.793-85.841-42.384-86.842-86.864l-.022-1.023h30.49c0-.786-.01-1.544-.016-2.281-.017-2.177-.034-4.233.038-6.264a9.991,9.991,0,0,1,10.086-10.042h.033a9.974,9.974,0,0,1,10.113,9.984c.078,2.04.06,4.094.04,6.27-.006.723-.013,1.463-.017,2.228h37.122v1q0,2.711.006,5.349c.012,6.217.024,12.089-.114,18.012-.034,1.452-2.1,2.7-3.042,3.047-9.976,3.687-15.246,10.584-15.238,19.943.008,9.4,5.152,16.1,15.291,19.917,1.211.456,2.938,2,3,3.475C863.385,616.053,863.364,619.958,863.342,624.093Zm98.037-81.664c-.137,19.868-8.973,40.726-24.242,57.225-16.536,17.867-38.645,28.4-62.251,29.661l-1.054.056V598.817c-.787,0-1.546.009-2.283.015-2.173.017-4.221.032-6.247-.034a10.116,10.116,0,0,1-.106-20.231c2.045-.077,4.105-.058,6.284-.04.721.007,1.458.013,2.22.017V541.436h1q2.706,0,5.338-.007c6.218-.012,12.092-.023,18.018.113,1.466.035,2.715,2.086,3.058,3.017,3.7,9.976,10.593,15.251,19.941,15.251h.005c9.277,0,16.167-5.283,19.925-15.273.457-1.212,2-2.942,3.467-3.005,3.975-.169,8.011-.148,11.912-.125,1.339.007,2.677.015,4.015.015h1.007Zm.363-11.384H931.187c0,.738.01,1.456.016,2.159.018,2.163.034,4.205-.037,6.244a10,10,0,0,1-10.084,10.05h-.036a10.082,10.082,0,0,1-10.112-9.984c-.077-2.037-.059-4.089-.039-6.262.005-.725.012-1.468.016-2.235H873.789l-.007-6.307c-.011-6.232-.022-12.118.115-18.055.035-1.448,2.106-2.694,3.045-3.04,9.97-3.673,15.239-10.573,15.235-19.955-.005-9.29-5.289-16.182-15.283-19.932-1.215-.457-2.947-1.993-3.008-3.458-.169-3.979-.148-8.019-.126-11.926q.012-2,.014-4v-1.007l1.007.007c19.908.136,40.788,8.995,57.284,24.3a91.5,91.5,0,0,1,29.622,62.343Z"
                          transform="translate(-487.138 3537.019)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                label="Integration with Third Parties
                "
                info="Bring versatility into your e-commerce software by integrating third-party platforms with Shopify to achieve a seamless experience.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 228.258 195.525"
                  >
                    <g
                      id="Group_46"
                      data-name="Group 46"
                      transform="translate(-723.708 -3976)"
                    >
                      <g
                        id="Group_26"
                        data-name="Group 26"
                        transform="translate(0 14.076)"
                      >
                        <path
                          id="Path_116"
                          data-name="Path 116"
                          d="M1417.948,591.248c13.041-.01,21.144-8.06,21.148-21.008q.015-62.207,0-124.414c0-12.7-8.16-20.909-20.78-20.912q-93.394-.018-186.784,0c-12.552,0-20.665,8.074-20.671,20.563q-.027,62.661,0,125.323c.007,12.2,8.182,20.419,20.342,20.441q18.4.035,36.792.013l22.954,0v19.614h-2.5c-.9,0-1.758-.006-2.6-.011h-.283c-.862-.007-1.7-.013-2.529-.013-1.018,0-2.016.01-3,.038-3.318.1-5.333,1.842-5.388,4.67a4.655,4.655,0,0,0,1.27,3.393,5.221,5.221,0,0,0,3.78,1.442c30.383.062,60.881.064,90.649,0a4.628,4.628,0,0,0,4.956-4.6c.086-2.8-1.951-4.772-5.069-4.9-1.944-.078-3.89-.057-5.774-.037-.911.008-1.83.017-2.758.017h-2.5V591.251l31.435,0Q1404.3,591.257,1417.948,591.248ZM1349.271,610.5h-48.352V591.529h48.352Zm-55.953-28.81q-30.335,0-60.672,0c-8.692,0-12.237-3.572-12.238-12.328q-.009-61.277,0-122.554c0-8.762,3.54-12.336,12.215-12.337q92.449-.009,184.907,0c8.531,0,12.011,3.505,12.013,12.092q.012,61.5,0,123.01c0,8.6-3.475,12.113-11.989,12.115q-22.111.008-44.221.007Z"
                          transform="translate(-487.138 3537.019)"
                        />
                        <path
                          id="Path_117"
                          data-name="Path 117"
                          d="M1369.1,514.478c.1-4.722.1-9.057-.016-13.253a3.245,3.245,0,0,0-3.119-3.575c-1.81-.3-3.583-.643-5.3-.978q-1.13-.222-2.238-.434l-1.616-.3-.111-1.643c-.008-.118-.019-.208-.028-.274a2.389,2.389,0,0,1,.356-1.737q.68-.994,1.369-1.984l.316-.455c.734-1.058,1.468-2.114,2.187-3.181,1.65-2.437,1.577-3.583-.349-5.574-2.616-2.7-5.452-5.542-8.672-8.678-2-1.946-3.194-2.047-5.565-.458-1.295.869-2.576,1.759-3.923,2.7l-5,3.458-.619-3.2c-.159-.82-.317-1.6-.468-2.342l-.051-.25c-.364-1.783-.7-3.408-.938-5.046-.347-2.351-1.415-3.339-3.684-3.412-4.338-.135-8.788-.139-13.224-.007-2.317.067-3.4,1.032-3.745,3.331-.264,1.775-.622,3.487-1,5.3-.173.825-.35,1.672-.523,2.554l-.635,3.211-2.677-1.883c-.728-.512-1.412-1-2.067-1.464l-.169-.12c-1.4-.992-2.71-1.928-4.046-2.826-2.254-1.512-3.443-1.429-5.306.373-2.984,2.882-5.982,5.879-8.911,8.907-1.774,1.834-1.861,3.078-.37,5.32.913,1.374,1.864,2.739,2.87,4.184.518.743,1.019,1.463,1.539,2.217l1.868,2.707-3.234.6c-.88.161-1.716.32-2.525.474l-.3-.959h0l.187.982c-1.8.345-3.508.669-5.222.931-2.269.344-3.27,1.475-3.35,3.781-.154,4.462-.153,8.9,0,13.209.08,2.227,1,3.322,3.079,3.661,1.761.287,3.517.628,5.375.988.91.176,1.816.352,2.767.53l3.233.61-1.881,2.7c-.512.736-1.007,1.441-1.488,2.124l-.109.157c-.985,1.4-1.917,2.732-2.816,4.069-1.457,2.165-1.359,3.5.387,5.306,2.823,2.917,5.821,5.917,8.912,8.916,1.782,1.731,3.124,1.827,5.313.38,1.389-.92,2.763-1.865,4.223-2.871l4.839-3.316.6,3.2c.145.765.28,1.5.41,2.2l.069.377c.317,1.718.609,3.3.93,4.855.6,2.933,1.464,3.708,4.177,3.769,4.409.1,8.519.1,12.567-.008,2.495-.065,3.652-1.066,3.993-3.454.253-1.763.6-3.481.964-5.3.177-.879.349-1.733.517-2.621l.6-3.166,3.852,2.588c.785.525,1.425.952,2.057,1.393.451.313.9.637,1.346.962.578.419,1.129.818,1.694,1.2,2.375,1.6,3.52,1.5,5.56-.48,2.568-2.495,5.252-5.175,8.442-8.434,2.112-2.157,2.227-3.357.558-5.831-.881-1.309-1.786-2.6-2.768-3.995l-3.4-4.874,3.231-.609c.752-.142,1.475-.283,2.176-.42l.423-.082c1.686-.33,3.433-.673,5.167-.946C1368.093,517.885,1369.052,516.792,1369.1,514.478Zm-11.227-1.666h-.007c-.243.018-.49.037-.729.073-4.541.668-8.62,5.761-8.084,10.093a10.219,10.219,0,0,0,1.822,3.648l.47.716c2.779,4.27,2.2,5.393-1.732,8.751l-1.244,1.063-1.347-.929c-.423-.293-.858-.586-1.3-.883-.961-.646-2.051-1.378-3.113-2.184-1.864-1.412-3.444-1.563-5.289-.506l-.279.162a8,8,0,0,1-2.544,1.084c-3.049.577-4.357,2.3-4.664,6.148-.1,1.248-.492,3.529-1.986,4.791a4.153,4.153,0,0,1-2.71,1,4.422,4.422,0,0,1-1.511-.269,5.468,5.468,0,0,1-3.412-4.154c-1.19-6.577-2.711-8.14-9.045-9.284a6.73,6.73,0,0,0-3.507.891,21.78,21.78,0,0,0-3.263,2.114c-.569.416-1.143.836-1.749,1.249l-1.594,1.089L1296,531.41l.844-1.313c.1-.156.2-.328.305-.51a11.115,11.115,0,0,1,1.269-1.853c2.578-2.9,2.883-5.5,1.124-9.589-1.572-3.659-3.463-5.092-6.976-5.291-1.318-.074-5.325-.3-5.224-5.07.086-4.043,3.182-4.456,4.67-4.654l.3-.042a9.607,9.607,0,0,0,8.613-9.626,7.646,7.646,0,0,0-1.057-3.039,29.955,29.955,0,0,0-2.1-3.176c-.379-.525-.769-1.066-1.16-1.636l-1.112-1.617,6.163-5.006,1.3.827c.125.081.271.164.426.252a10.937,10.937,0,0,1,1.852,1.262c2.956,2.609,5.55,2.927,9.571,1.167,3.694-1.617,5.135-3.505,5.318-6.964.07-1.326.242-5.27,5.044-5.245,4.078.079,4.506,3.236,4.711,4.754l.026.2a9.57,9.57,0,0,0,9.595,8.626,7.125,7.125,0,0,0,3.039-1.05,29.685,29.685,0,0,0,3.169-2.1l.082-.059c.5-.364,1.022-.738,1.567-1.113l1.655-1.142,4.945,6.378-.864,1.278c-.3.435-.632.869-.989,1.328a10.934,10.934,0,0,0-1.836,2.9,16.642,16.642,0,0,0-.477,5.124l0,.44c.058.123.151.274.222.393a5.789,5.789,0,0,1,.782,1.828c.648,3.269,2.478,4.708,6.315,4.971l.356.022c1.582.1,5.292.319,5.234,4.993C1362.648,512.422,1359.305,512.7,1357.877,512.812Z"
                          transform="translate(-487.138 3537.019)"
                        />
                        <path
                          id="Path_118"
                          data-name="Path 118"
                          d="M1269.954,486.131c-5.588,6.447-11.181,13.071-16.43,19.3-1.334,1.585-1.443,3.287-.3,4.671,5.142,6.222,11.266,13.534,17.7,20.6a4.657,4.657,0,0,0,3.837.537,4.929,4.929,0,0,0,2.392-3.294c.1-.862-.587-2.317-1.8-3.8-3.1-3.759-6.246-7.382-9.579-11.219q-1.831-2.1-3.694-4.259l-.572-.664.57-.666q2.04-2.382,4.045-4.71c3.311-3.848,6.438-7.483,9.564-11.233,1.633-1.958,1.539-4.207-.238-5.729a3.841,3.841,0,0,0-2.511-.952A3.937,3.937,0,0,0,1269.954,486.131Z"
                          transform="translate(-487.138 3537.019)"
                        />
                        <path
                          id="Path_119"
                          data-name="Path 119"
                          d="M1395.849,504.6c-5.7-6.825-10.4-12.362-14.809-17.424a4.533,4.533,0,0,0-2.254-1.6l-.04,0a7.316,7.316,0,0,0-4.242,1.787c-1.46,1.554-.287,3.432.542,4.413,3.226,3.815,6.454,7.627,9.747,11.516l3.972,4.691-.55.641q-1.989,2.324-3.937,4.584c-3.176,3.69-6.175,7.176-9.178,10.758a4.551,4.551,0,0,0-1.229,3.317,3.612,3.612,0,0,0,1.405,2.464c1.679,1.368,3.962,1.034,5.554-.811,5.839-6.771,10.617-12.375,15.038-17.636C1398.064,508.687,1398.06,507.246,1395.849,504.6Z"
                          transform="translate(-487.138 3537.019)"
                        />
                        <path
                          id="Path_120"
                          data-name="Path 120"
                          d="M1308.292,507.991a17.039,17.039,0,0,0,16.856,16.942h.024a17.03,17.03,0,0,0,16.888-16.942,17.066,17.066,0,0,0-5.172-12,16.487,16.487,0,0,0-11.564-4.832c-.09,0-.179,0-.269,0A17.116,17.116,0,0,0,1308.292,507.991Zm16.844-9.9h.163a9.962,9.962,0,0,1-.093,19.923h-.06a9.972,9.972,0,0,1-7.067-3.046,9.866,9.866,0,0,1-2.863-7.116A10.147,10.147,0,0,1,1325.136,498.087Z"
                          transform="translate(-487.138 3537.019)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                label="Custom Development
                "
                info="Our development services cater to all of your e-commerce development needs, enabling us to build custom Shopify websites as well as adding functionality to the areas that you require.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 216.675 216.776"
                  >
                    <g
                      id="Group_47"
                      data-name="Group 47"
                      transform="translate(-1101.034 -3969)"
                    >
                      <g
                        id="Group_25"
                        data-name="Group 25"
                        transform="translate(7.996 8.185)"
                      >
                        <path
                          id="Path_121"
                          data-name="Path 121"
                          d="M1702.492,520.782c.025-29.754.025-60.314,0-90.831,0-4.763-1.427-6.14-6.339-6.145q-19.714-.016-39.424-.008l-15.489,0-30.383,0q-12.265,0-24.529.012c-4.821,0-6.141,1.349-6.143,6.254q-.02,45.2,0,90.4c0,4.971,1.418,6.488,6.06,6.494,38.376.05,75.471.048,110.254,0C1700.92,526.946,1702.488,525.332,1702.492,520.782Zm-9.379-3.125H1589.535V479.885h103.578Zm.022-47.325H1589.342V433.062h103.793Z"
                          transform="translate(-487.138 3537.019)"
                        />
                        <path
                          id="Path_122"
                          data-name="Path 122"
                          d="M1790.477,622.283c7.071-.05,10.813-3.741,10.823-10.671.03-20.237.029-38.057,0-54.475-.011-6.465-3.831-10.333-10.216-10.346-23.3-.047-47.76-.05-74.774,0-6.648.011-10.471,3.859-10.487,10.557-.048,19.215-.047,37.032,0,54.473.018,6.5,3.755,10.313,10.249,10.455,3.943.087,7.972.067,11.867.046l5.37-.016h15.634v13.617h-2.411c-1.153,0-2.259-.01-3.332-.018l-.54,0c-.926-.008-1.832-.015-2.725-.015-1.456,0-2.644.018-3.739.06-2.869.106-4.543,1.693-4.592,4.352a4.482,4.482,0,0,0,1.139,3.3,4.807,4.807,0,0,0,3.5,1.282c11.071.094,22.369.1,34.542,0,3.056-.022,4.8-1.656,4.8-4.48-.009-2.795-1.743-4.382-4.885-4.47-2.163-.061-4.3-.047-6.56-.033l-.481,0c-.923.007-1.852.013-2.786.013h-2.411V622.3h2.411q4.6,0,9.135.01C1776.3,622.318,1783.441,622.332,1790.477,622.283Zm-75.312-9.25V556.152h76.826v56.881Z"
                          transform="translate(-491.609 3532.643)"
                        />
                        <path
                          id="Path_123"
                          data-name="Path 123"
                          d="M1621.707,553.756c-.12,16.806-.115,32.223.013,47.133.03,3.426,1.747,5.1,5.251,5.11,15.53.058,31.372.058,48.436,0,3.392-.011,5.256-1.612,5.247-4.507-.009-2.86-1.888-4.443-5.292-4.458-8.883-.039-17.849-.032-26.522-.024l-18.163,0v-7.557q0-5.1.006-10.208v-.334c.006-8.174.013-16.625-.032-24.932-.012-2.458-.771-5.4-4.314-5.446h0a4.372,4.372,0,0,0-3.177,1.163A5.574,5.574,0,0,0,1621.707,553.756Z"
                          transform="translate(-488.614 3532.579)"
                        />
                        <path
                          id="Path_124"
                          data-name="Path 124"
                          d="M1771.641,516.021q0-6.678.01-13.355v-.192c.013-10.844.026-22.056-.05-33.077-.029-4.164-1.392-5.515-5.607-5.564-6.621-.078-13.366-.062-19.888-.047h-.282q-3.5.009-7,.014c-3.387,0-5.79.629-6.946,1.812a3.576,3.576,0,0,0-.9,2.722c.027,1.224.1,4.479,8.116,4.489,4.8.007,9.607.008,14.584,0h8.955v7.589q0,4.411-.007,8.822v.169c-.01,8.513-.019,17.316.064,25.965a9.5,9.5,0,0,0,.952,4.521,3.659,3.659,0,0,0,4.686,1.6C1769.871,520.984,1771.642,519.9,1771.641,516.021Z"
                          transform="translate(-492.506 3535.596)"
                        />
                        <path
                          id="Path_125"
                          data-name="Path 125"
                          d="M1678.933,501.385c-.038-2.91-2.005-4.4-5.846-4.426-10.494-.073-21.366-.073-32.318,0h0c-3.843.026-5.816,1.5-5.867,4.391a4,4,0,0,0,1.015,2.97c.991,1.023,2.738,1.582,5.051,1.616,3.713.056,7.5.041,11.156.027,1.639-.006,3.2-.012,4.769-.013h.279q2.411,0,4.823.014c3.724.014,7.523.032,11.243-.041C1675.862,505.874,1678.98,505.046,1678.933,501.385Z"
                          transform="translate(-489.086 3534.417)"
                        />
                        <path
                          id="Path_126"
                          data-name="Path 126"
                          d="M1615.99,501.55a4.822,4.822,0,0,0-1.407-3.523,5.317,5.317,0,0,0-3.794-1.627h0a5.154,5.154,0,0,0-5.166,4.89,4.863,4.863,0,0,0,1.406,3.564,5.221,5.221,0,0,0,8.965-3.3Z"
                          transform="translate(-488.044 3534.435)"
                        />
                        <path
                          id="Path_127"
                          data-name="Path 127"
                          d="M1679.252,452.791a4.156,4.156,0,0,0-1.205-3.027,5.535,5.535,0,0,0-4.011-1.648h0c-10.728-.094-21.74-.1-33.665-.008-3.129.024-5.394,1.943-5.39,4.565,0,2.726,2.029,4.376,5.413,4.411,3.788.041,7.589.035,11.807.021h.836q2.09-.006,4.183-.007,2.544,0,5.089.009h.1c3.814.011,7.76.024,11.629-.026C1677.113,457.041,1679.158,455.357,1679.252,452.791Z"
                          transform="translate(-489.089 3536.156)"
                        />
                        <path
                          id="Path_128"
                          data-name="Path 128"
                          d="M1615.991,452.52a5.382,5.382,0,0,0-5.473-5.012,5.333,5.333,0,0,0-4.9,5.292,5.4,5.4,0,0,0,5.179,5.045,5.231,5.231,0,0,0,3.687-1.665A5.123,5.123,0,0,0,1615.991,452.52Z"
                          transform="translate(-488.044 3536.176)"
                        />
                      </g>
                    </g>
                  </svg>
                }
                label="Migrating to a Shopify Store
                "
                info="Our expert Shopify developers are here to cater to all your transitioning needs. Doesn't matter if you're migrating from a physical store or an online platform.

                "
              />
              <EcomerenceServiceEntry
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 207.396 208.428"
                  >
                    <g
                      id="Group_48"
                      data-name="Group 48"
                      transform="translate(-293.204 -4326.53)"
                    >
                      <g
                        id="Group_30"
                        data-name="Group 30"
                        transform="translate(27.435)"
                      >
                        <path
                          id="Path_132"
                          data-name="Path 132"
                          d="M930.649,804.361c-1.619.982-3.318,2.83-4.831,2.687-1.361-.128-3.662-2.624-3.482-3.743a5.606,5.606,0,0,1,3.871-3.752c1.394-.15,3.025,1.9,4.551,2.978Z"
                          transform="translate(-519.312 3535.114)"
                        />
                        <g
                          id="Group_28"
                          data-name="Group 28"
                          transform="translate(265.769 4326.53)"
                        >
                          <path
                            id="Path_129"
                            data-name="Path 129"
                            d="M830.862,956.414c-1.259,1.542-2.609,3.412-4.182,5.071-2.119,2.233-4.394,2.351-6.667.065q-8.421-8.47-16.894-16.887c-2.429-2.4-2.511-5.015.124-6.914,4.49-3.235,4.971-6.728,1.8-11.032a3.9,3.9,0,0,1-.638-1.476c-1.137-5.414-3.5-8.808-9.987-7.693-2.872.494-4.553-1.7-4.522-4.894.075-7.557,0-15.116.031-22.673.017-4.459,1.353-6.179,5.719-5.765,4.709.446,7.3-1.061,8.017-5.74a4.918,4.918,0,0,1,.732-1.869c3.143-4.852,4.062-9.234-1.667-13.131-2-1.359-1.929-3.829-.089-5.691q8.823-8.926,17.743-17.755c2.007-1.994,4.18-1.831,6.056.083,1.692,1.725,3.115,3.716,4.315,5.174,5.359-2.16,9.757-3.815,14.031-5.748a4.3,4.3,0,0,0,1.949-2.8c.333-1.692-.019-3.506.164-5.243.273-2.583,1.618-4.258,4.443-4.26,8.233-.006,16.466-.06,24.7.028,3.567.037,4.743,2.609,4.33,5.536-.694,4.913,1.15,7.25,5.966,8.314,3.2.708,6.14,2.582,9.982,4.281,1.426-1.682,2.881-3.647,4.594-5.352,1.924-1.916,4.079-1.919,6.06.053q8.753,8.711,17.471,17.455c1.969,1.975,1.913,4.051.089,6.082a27.531,27.531,0,0,1-3.136,3.155c-1.751,1.4-1.989,2.718-.894,4.81a65.926,65.926,0,0,1,4.009,9.665c.7,2.108,1.649,3.164,3.978,2.867a20.2,20.2,0,0,1,4.447.016c2.8.268,4.436,1.709,4.428,4.711-.021,7.962-.047,15.926.013,23.888.024,3.22-1.646,4.679-4.639,4.929a15.7,15.7,0,0,1-3.637.016c-2.818-.432-4.233.727-4.728,3.48a11.848,11.848,0,0,1-1.414,3.761c-2.87,4.951-4.5,9.474,1.677,13.51,2.2,1.435,1.662,4.054-.277,5.991q-8.592,8.584-17.173,17.18c-2.109,2.113-4.235,2.078-6.388.092A12.629,12.629,0,0,1,899.071,960c-2.144-2.932-4.44-3.754-7.736-1.436a16.991,16.991,0,0,1-6.652,2.806c-3.837.664-4.447,2.762-4.311,6.193.243,6.1-.921,7.1-6.869,7.1-6.883.006-13.766.018-20.648,0-4.682-.015-6.34-1.309-5.914-5.974.417-4.588-1.093-6.762-5.547-7.851C838.058,960.022,834.971,958.188,830.862,956.414Zm-7.241-3.454a27.555,27.555,0,0,0,2.786-2.664c2.7-3.352,5.422-3.513,9.08-1.153a51.215,51.215,0,0,0,10.6,4.853c8.222,2.93,8.259,2.821,8.974,11.622.019.232.267.445.464.753h16.616a29.457,29.457,0,0,0,.168-4.148c-.431-4.225,1.217-6.342,5.552-7.267a50.153,50.153,0,0,0,11.271-4.3c7.707-3.762,7.648-3.877,14.185,2,.171.153.487.144.39.118L915.7,940.892a25.693,25.693,0,0,0-2.612-2.718c-3.348-2.656-3.656-5.359-1.259-9.056a50.788,50.788,0,0,0,4.873-10.6c2.96-8.3,2.849-8.34,11.574-9.037.235-.019.452-.258.787-.459V892.4a28.935,28.935,0,0,0-4.131-.17c-4.232.437-6.366-1.214-7.257-5.562a47.939,47.939,0,0,0-4.088-10.926c-3.88-8.054-3.985-8,1.781-14.537.147-.167.118-.489.041-.127L903.531,848.95a21.289,21.289,0,0,0-2.455,2.332c-2.734,3.48-5.585,3.914-9.375,1.321a28.7,28.7,0,0,0-9.11-4.234c-6.8-1.67-12.829-3.529-9.962-12.769H854.922a35.425,35.425,0,0,0,.02,3.865c.525,4.443-1.312,6.61-5.808,7.468a26.564,26.564,0,0,0-10.1,3.888c-5.942,4.166-10.88,4.49-15.321-1.822-.052-.074-.24-.051.659.11l-12.734,12.616c.6.453,1.587,1.173,2.549,1.922,3.359,2.615,3.626,5.373,1.244,9.058a50.918,50.918,0,0,0-4.883,10.6c-2.968,8.34-2.855,8.377-11.563,9.034-.231.018-.445.261-.785.472v16.616a29.482,29.482,0,0,0,4.137.167c4.225-.423,6.364,1.218,7.254,5.569a47.76,47.76,0,0,0,4.092,10.925c3.876,8.038,3.982,7.984-1.822,14.519-.15.168-.134.483-.055.165Z"
                            transform="translate(-759.931 -796.671)"
                          />
                          <path
                            id="Path_130"
                            data-name="Path 130"
                            d="M855.533,789.511c7.149.813,13.034,1.472,18.918,2.154,3.09.359,6.392.914,5.76,5.058-.664,4.345-4.289,3.425-7.111,2.919a93.585,93.585,0,0,0-43.2,2.405,95.538,95.538,0,0,0-68.222,81.1c-2.66,24.394,3.4,46.458,17.334,66.527,1.476,2.125,2.681,2.586,5.245,1.733a16.468,16.468,0,0,1,19.81,7.615,16.955,16.955,0,1,1-30.231,1.9c1.03-2.353.668-3.831-.726-5.768-43.645-60.661-13.225-144.09,59.225-162.113C840.25,791.066,848.528,790.542,855.533,789.511ZM798.28,967.578a8.913,8.913,0,1,0-9.08,8.843A8.937,8.937,0,0,0,798.28,967.578Z"
                            transform="translate(-752.908 -789.511)"
                          />
                          <path
                            id="Path_131"
                            data-name="Path 131"
                            d="M875.439,1001.113c-5.92-.673-11.669-1.324-17.416-1.979-3.2-.365-6.8-.8-6.017-5.187.808-4.538,4.685-3.224,7.563-2.724,15.18,2.639,30.22,1.883,44.681-3.225,38.158-13.479,60.635-40.293,65.995-80.583,3.215-24.159-3.305-46.145-17.07-66.123-1.535-2.228-2.8-2.833-5.538-1.924a16.519,16.519,0,0,1-19.752-7.742A16.983,16.983,0,0,1,952.2,809.2a16.443,16.443,0,0,1,6.234,19.95c-1.282,2.991-.7,4.784,1.012,7.159,44.3,61.4,9.818,148.424-64.434,162.519C888.551,1000.057,881.92,1000.379,875.439,1001.113ZM951.558,823.09a8.912,8.912,0,1,0-8.864,9.057A9.009,9.009,0,0,0,951.558,823.09Z"
                            transform="translate(-771.707 -792.685)"
                          />
                          <path
                            id="Path_133"
                            data-name="Path 133"
                            d="M873.215,943.764A33.351,33.351,0,1,1,906.454,910.3,33.049,33.049,0,0,1,873.215,943.764Zm-25.361-33.382a25.249,25.249,0,1,0,25.478-25.217A24.98,24.98,0,0,0,847.854,910.382Z"
                            transform="translate(-769.4 -806.138)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                }
                label="Maintenance and Support
                "
                info="Our Shopify support and maintenance services ensure your online store runs efficiently and smoothly to achieve zero business loss."
              />
            </div>
          </div>
          <div className="ecommerce__screen__container__process">
            <div className="ecommerce__screen__container__process__heading">
              Our Process
            </div>
            {role === "Shopify" ? (
              <div className="ecommerce__screen__container__process__content">
                <div className="ecommerce__screen__container__process__content__selector">
                  {shopifyPorcess.map((item) => (
                    <EcomereceProcessSelector
                      label={item.label}
                      selected={process}
                      setSelected={setProcess}
                    />
                  ))}
                </div>
                {shopifyPorcess
                  .filter((item) => item.label === process)
                  .map((item) => (
                    <div className="ecommerce__screen__container__process__content__selector__content">
                      {item.list.map((item) => (
                        <div className="ecommerce__screen__container__process__content__selector__content__entry">
                          {item.svg}
                          <div className="ecommerce__screen__container__process__content__selector__content__entry__info">
                            {item.info}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="ecommerce__screen__container__process__content">
                <div className="ecommerce__screen__container__process__content__selector">
                  {wordpressPorcess.map((item) => (
                    <EcomereceProcessSelector
                      label={item.label}
                      selected={process}
                      setSelected={setProcess}
                    />
                  ))}
                </div>
                {wordpressPorcess
                  .filter((item) => item.label === process)
                  .map((item) => (
                    <div className="ecommerce__screen__container__process__content__selector__content">
                      {item.list.map((item) => (
                        <div className="ecommerce__screen__container__process__content__selector__content__entry">
                          {item.svg}
                          <div className="ecommerce__screen__container__process__content__selector__content__entry__info">
                            {item.info}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="ecommerce__screen__container__work__code">
            <div className="ecommerce__screen__container__work__code__header">
              <div className="ecommerce__screen__container__work__code__header__heading">
                Why Work With Code District
              </div>
              <div className="ecommerce__screen__container__work__code__header__info">
                Get access to the top talent of experienced product managers,
                smartest designers, and engineers.
              </div>
            </div>
            <div className="ecommerce__screen__container__work__code__content">
              {role === "Shopify" ? (
                <>
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 265.762 265.806"
                      >
                        <g
                          id="Group_49"
                          data-name="Group 49"
                          transform="translate(-249.132 -4763.958)"
                        >
                          <path
                            id="Path_137"
                            data-name="Path 137"
                            d="M1026.679,310.981c-3.1-7.942-5.4-15.653-9.116-22.6-1.868-3.493-6.31-5.613-9.6-8.336-2.2-1.818-4.522-3.5-6.628-5.423-9.57-8.728-6.9-22.344,5.242-27.012.977-.376,1.934-.8,3.268-1.362-3.368-6.729-6.569-13.248-9.884-19.71a22.086,22.086,0,0,1-1.683-17.527c2.4-7.653-.444-12.624-8.137-15.353a63.506,63.506,0,0,1-7.534-2.663c-1.578-.8-3.814-2.422-3.819-3.684a6.945,6.945,0,0,1,3.007-4.935,143.431,143.431,0,0,1,45.339-18.245c19.393-4.384,39.06-3.076,58.65-3.066,6.887,0,14.056.16,20.608,1.992a43.473,43.473,0,0,1,29.706,55.215c-2.915,9.323-6.473,18.444-9.651,27.413,3.383,1.82,7.025,3.078,9.773,5.4,6.415,5.409,6.828,15.295,1.248,21.622a20.638,20.638,0,0,1-5.592,4.939c-13.452,6.887-16.273,20.556-21.848,33.34,11.34,0,22.167-.006,32.993,0,15.314.011,24.453,8.59,23.814,23.714-.4,9.5,1.259,15.6,10.608,21.219,16.306,9.8,23.5,26.183,23.841,45.284.108,6.068.036,12.141.013,18.211-.025,6.563-.739,7.262-7.512,7.264q-47.671.014-95.343,0H945.248c-9.664,0-9.911-.01-9.595-9.934s.092-20.087,2.081-29.736c3.309-16.052,13.358-27.777,27.9-35.265,3.479-1.792,4.547-3.78,4.3-7.385-.268-3.91-.107-7.852-.05-11.779.179-12.367,9.354-21.489,21.82-21.578C1003.251,310.917,1014.8,310.981,1026.679,310.981ZM978.415,417.756h180.055c0-27.856.009-55.332,0-82.808-.005-10.584-4.8-15.415-15.3-15.422q-38.834-.023-77.667-.005-36.156,0-72.311.01c-9.764.011-14.717,5.045-14.767,14.88-.018,3.571,0,7.142,0,10.713Zm35.425-182.719c10.171-6.761,19.673-13.083,29.18-19.4a44.01,44.01,0,0,1,24.671-7.57,47.212,47.212,0,0,0,6.355-.715c10.148-1.437,17.13-8.373,24.594-14.375,3.7-2.975,6.25-2.432,8.725,1.434,6.344,9.907,14.107,19.041,16.586,31.238a57.569,57.569,0,0,0,4.091-9.888c6.568-21.764-8.51-45.2-31.035-45.891a571.079,571.079,0,0,0-63.567,2.05c-13.759,1.115-26.723,6.453-39.659,13.483,13.154,6.253,16.208,15.982,12.168,28.664a8.858,8.858,0,0,0,.487,5.7C1008.612,224.8,1011.193,229.658,1013.839,235.037Zm50.488,29.006c-.071,1.245-.141,2.268-.185,3.292-.37,8.571-5.356,13.481-13.844,13.6-2.319.033-4.64.046-6.959,0-8.1-.173-13.3-5.348-13.442-13.448-.073-4.027-.013-8.056-.013-12.259-2.036,0-3.281-.026-4.525.007-1.2.032-2.4.125-4.031.214.6,19.39,5.381,37.187,15.012,53.6.66,1.126,2.923,1.838,4.448,1.848,18.377.125,36.758.186,55.132-.076a7.454,7.454,0,0,0,5.554-3.483c3.629-7.888,7.4-15.84,9.742-24.157,2.51-8.906,3.481-18.245,5.183-27.722H1107c0,4.094.051,7.975-.011,11.854-.134,8.388-5.333,13.5-13.81,13.623-2.32.034-4.641.045-6.959,0-7.881-.164-13.052-5.136-13.481-12.893-.075-1.348-.254-2.689-.382-4Zm50.869-17.356c1.9-19.706-2.6-33.826-14-44.656-.685.53-1.416,1.032-2.076,1.614-9.722,8.56-20.831,12.878-33.994,13.36-5.872.215-12.015,3.064-17.332,5.993-7.768,4.279-14.781,9.907-22.363,14.557-3.572,2.19-5.093,4.619-3.607,9.132h32.348c8.885,0,8.885,0,10.654,8.193h7.7c.528-7.844.877-8.187,8.206-8.191C1092.121,246.68,1103.506,246.686,1115.2,246.686Zm77.239,171.244c3.431-33.711-9.179-51.5-25.089-57.737V417.93Zm-222.87-.006V359.762c-22.127,10.77-28.04,32.672-24.783,58.162Zm68.667-162.473c1.286,5.743-2.731,12.436,2.84,16.073,2.906,1.9,10.617,1.785,11.805-.127,2.651-4.261,2.566-10.222,3.685-15.946Zm61.364.219h-19.143c.953,5.467.606,11.481,3.276,15.485,1.371,2.055,10.505,2.237,11.94.245C1098.482,267.495,1098.362,261.475,1099.6,255.67Zm-85.275,18.711c-.73-7.372-1.3-13.147-1.88-18.982-4.453-.355-7.326,1.795-8.031,5.614C1003.112,268.043,1009.657,269.685,1014.321,274.38Zm108.32-.817c8.83-5.893,11.09-8.7,9.87-12.611-1.161-3.728-3.68-5.952-8.089-5.534C1123.846,261.279,1123.278,267.068,1122.64,273.564Z"
                            transform="translate(-686.446 4603.086)"
                          />
                          <path
                            id="Path_138"
                            data-name="Path 138"
                            d="M1127.557,464.626a17.126,17.126,0,1,1-16.575-17.4A17.176,17.176,0,0,1,1127.557,464.626Zm-8.56-.242a8.569,8.569,0,1,0-8.474,8.526A8.682,8.682,0,0,0,1119,464.384Z"
                            transform="translate(-728.437 4526.854)"
                          />
                          <path
                            id="Path_139"
                            data-name="Path 139"
                            d="M1061.615,404.459l15.469,14.132-6.992,5.365c-5-5.017-10.778-10.53-16.122-16.434-.945-1.043-.9-4.454.072-5.519,5.353-5.89,11.133-11.393,17.149-17.41l6.183,6.371Z"
                            transform="translate(-717.783 4543.527)"
                          />
                          <path
                            id="Path_140"
                            data-name="Path 140"
                            d="M1153.357,425.2l-5.655-6.073,15.5-13.984-17.095-13.55,7.115-6.774c5.825,5.812,11.63,11.28,16.944,17.191,1,1.115.9,4.736-.15,5.925C1164.874,413.783,1159.245,419.2,1153.357,425.2Z"
                            transform="translate(-742.493 4543.466)"
                          />
                          <path
                            id="Path_141"
                            data-name="Path 141"
                            d="M1094.509,419.55l25.665-34.21,6.832,5.121-25.664,34.218Z"
                            transform="translate(-728.757 4543.328)"
                          />
                        </g>
                      </svg>
                    }
                    label="Top Shopify Developers"
                    info="Our highly experienced development team who have been working with Shopify since its origin, thrive in providing top quality services to our clients."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 145.3 247.378"
                      >
                        <g
                          id="Group_50"
                          data-name="Group 50"
                          transform="translate(-759.495 -4786.511)"
                        >
                          <path
                            id="Path_134"
                            data-name="Path 134"
                            d="M1631.117,315.3q0-49.072.011-98.145c.019-16.163,9.245-25.487,25.256-25.509q47.527-.065,95.054.005c15.5.029,24.927,9.5,24.937,25.092q.061,98.531,0,197.062c-.009,15.547-9.5,25.11-24.912,25.137q-47.913.086-95.827,0c-14.972-.034-24.478-9.65-24.5-24.721Q1631.053,364.755,1631.117,315.3Zm9.217,67.485h126.393a24.448,24.448,0,0,0,.378-2.791q.033-81.914,0-163.829c-.014-10.045-5.681-15.245-16.236-15.263q-47.139-.083-94.279,0c-11.172.021-16.215,5.286-16.241,16.8-.045,19.577-.013,39.154-.013,58.731Zm.008,10.114c0,8.075-.181,15.271.047,22.456.266,8.4,5.774,14.238,14.053,14.279q49.414.252,98.831,0c7.391-.034,12.567-4.511,13.432-11.493,1.024-8.255.241-16.735.241-25.241Z"
                            transform="translate(-871.609 4594.904)"
                          />
                          <path
                            id="Path_135"
                            data-name="Path 135"
                            d="M1681.792,348.277c1.23-7.336,2.873-14.638,3.5-22.025a13.87,13.87,0,0,0-2.792-9.212c-4.606-5.5-10.181-10.166-15.135-15.387-4.219-4.445-3.372-7.007,2.571-8.163,5.539-1.077,11.159-2.733,16.7-2.57,8.23.241,11.911-3.977,14.543-10.842a138.765,138.765,0,0,1,7.322-15.241c2.6-4.9,5.739-4.953,8.328-.024,3.1,5.9,6.106,11.873,8.655,18.022,2.1,5.074,5.177,7.537,10.889,7.84,6.63.351,13.224,1.724,19.789,2.9,5.184.93,5.789,3.932,2.4,7.51-5.122,5.415-10.876,10.266-15.68,15.934a13.831,13.831,0,0,0-2.851,9.21c.6,7.13,2.507,14.139,3.414,21.258.773,6.068-1.642,7.635-7.158,4.937-8.038-3.932-15.96-11.118-23.985-11.193-7.7-.071-15.421,7.248-23.223,11.137C1683.747,355.026,1681.778,353.815,1681.792,348.277Zm66.55-46.877-1.658-1.4c-5.335-.748-10.657-1.629-16.01-2.206-5.026-.542-8.408-2.594-10.284-7.667-1.886-5.1-4.715-9.847-7.694-15.89-2.961,5.921-5.7,10.084-7.174,14.656-2.191,6.807-7.106,8.653-13.336,9.282-4.639.468-9.243,1.289-14.695,2.074,6.114,6.586,13.743,11.421,15.857,18.022,2.167,6.765-1.065,15.257-2.222,25.553,14.717-13.994,28.619-13.447,43.606-1.324C1726.826,324.171,1732.424,311.1,1748.343,301.4Z"
                            transform="translate(-880.562 4576.393)"
                          />
                          <path
                            id="Path_136"
                            data-name="Path 136"
                            d="M1726.356,475.915c5.657.473,9.34,3.258,9.568,8.989.229,5.747-3.214,9.24-8.8,9.5-5.667.259-9.249-3.129-9.492-8.79C1717.385,479.9,1720.853,476.815,1726.356,475.915Z"
                            transform="translate(-894.64 4519.215)"
                          />
                        </g>
                      </svg>
                    }
                    label="Mobile-First Approach"
                    info="Mobile devices play a major role in the outburst of e-commerce sales, we make sure to deliver the best Shopify experience which is appealing to consumers."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 263.001 209.573"
                      >
                        <g
                          id="Group_51"
                          data-name="Group 51"
                          transform="translate(-1136.138 -4798.753)"
                        >
                          <path
                            id="Path_142"
                            data-name="Path 142"
                            d="M2382.717,407.306h14.051V291.719h-14.051c0,6.163,0,12.42,0,18.677,0,5.138.043,10.278-.026,15.415-.046,3.449-2.059,6.052-5.285,5.388-1.928-.4-4.649-3.435-4.711-5.36-.416-13-.251-26.028-.2-39.044.016-3.743,2.1-5.6,5.833-5.606,7.194,0,14.387-.031,21.581,0,6.037.026,7.461,1.463,7.463,7.6q.021,55.751.007,111.5c0,3.426.032,6.852-.008,10.277-.064,5.584-1.709,7.174-7.424,7.265-.685.011-1.37,0-2.055,0q-122.036,0-244.073,0c-4.09,0-9.247.716-9.311-5.166-.065-6.08,5.223-5.069,9.224-5.09,9.07-.047,18.141-.015,28.489-.015-27.016-18.738-40.589-43.363-37.364-75.525,2.388-23.807,14.163-42.624,34.036-55.964,37.271-25.017,91.763-13.9,114.4,34.376,39.426-18.376,73.571-42.419,93.957-83.578-1.86.476-3.023,1.185-3.846.9-2.181-.745-5.1-1.426-6.021-3.081-.7-1.26.591-4.866,2.062-5.878a181.883,181.883,0,0,1,16.346-9.606c3.648-1.984,6.533-.695,7.521,3.207a146.2,146.2,0,0,1,3.793,19.065c.2,1.721-2.027,4.629-3.845,5.468-2.974,1.373-4.793-.4-6.783-5.52-21.336,43.291-57.6,69.546-99.195,88.546.7,10.212,1.354,19.848,2.051,30.065h8.137c8.731,0,9.466.719,9.467,9.231q0,21.324,0,42.648v5.336h10.309v-5.272q0-38.539.006-77.076c0-6.459,1.309-7.743,7.811-7.766s13.017-.028,19.526,0c6.155.029,7.558,1.4,7.564,7.5q.028,38.281.008,76.561v5.976h10.309v-28.64c0-1.542.03-3.083-.005-4.624-.082-3.543,1.167-6.251,5.068-6.29s5.2,2.61,5.19,6.173c-.023,9.42-.007,18.841-.006,28.261Zm-94.074-69.128c-1.134-36.574-31.863-66.312-69.045-64.662-39,1.73-67.064,33.114-64.972,71.305,1.984,36.229,34.445,64.855,71.1,62.7C2261.669,405.41,2290.772,373.332,2288.643,338.178Zm62.939,69.257V327.79h-13.659v79.644Zm-59.554-.279h14.418v-46.6h-9.71C2288.892,375.493,2293.7,391.434,2292.028,407.156Zm-30.414-.03h20.077V389.561c-3.469,3.438-6.319,6.551-9.477,9.312C2269.035,401.655,2265.551,404.087,2261.614,407.125Z"
                            transform="translate(-1008.257 4590.462)"
                          />
                          <path
                            id="Path_143"
                            data-name="Path 143"
                            d="M2426.506,385.778c-2.4-3.262-4.535-4.94-4.9-6.938-.575-3.178,1.774-5.193,4.92-5.184s5.489,2.027,4.9,5.205C2431.058,380.858,2428.917,382.526,2426.506,385.778Z"
                            transform="translate(-1057.183 4561.268)"
                          />
                          <path
                            id="Path_144"
                            data-name="Path 144"
                            d="M2229.3,375.352c-9.566.015-17.145-9.074-14.972-18.4.729-3.132-.046-4.984-2.238-7.1-7.265-7.006-14.288-14.262-21.477-21.349-2.75-2.711-4.392-5.665-1.214-8.821,3.083-3.062,5.839-1.142,8.353,1.4,7.34,7.419,14.658,14.867,22.214,22.062,1.261,1.2,3.646,1.367,5.565,1.686,1.312.217,2.869-.563,4.057-.15,5.927,2.064,9.432-1.2,12.849-5.241,2.444-2.887,5.579-4.536,8.758-1.225,2.987,3.109,1.144,5.935-1.4,8.407-1.228,1.192-2.367,2.479-3.642,3.615-1.885,1.677-2.6,3.215-1.988,6.117C2246.287,366.424,2239.055,375.338,2229.3,375.352Zm.025-22.6c-2.459,3.253-5.188,5.351-4.888,6.834.416,2.046,2.9,4.758,4.893,5.14a4.094,4.094,0,0,0,4.735-5.1C2233.655,357.619,2231.626,355.952,2229.327,352.747Z"
                            transform="translate(-1015.896 4571.073)"
                          />
                          <path
                            id="Path_145"
                            data-name="Path 145"
                            d="M2282.7,317.288c1.327,2.063,3.749,4.184,3.643,6.169-.089,1.658-2.953,4.127-4.921,4.505-3.159.607-5.368-1.9-4.7-5.058.433-2.061,2.521-3.775,3.868-5.643Z"
                            transform="translate(-1031.597 4571.224)"
                          />
                          <path
                            id="Path_146"
                            data-name="Path 146"
                            d="M2242.928,431.768c-1.973,1.291-4.192,3.859-5.855,3.538-1.941-.373-4.354-3.1-4.708-5.133-.219-1.254,2.926-4.239,4.727-4.385,1.849-.15,3.9,2.213,5.862,3.476Q2242.942,430.516,2242.928,431.768Z"
                            transform="translate(-1023.787 4552.064)"
                          />
                          <path
                            id="Path_148"
                            data-name="Path 148"
                            d="M2281.874,404.124c2.231,3.66,4.592,5.834,4.442,7.818-.124,1.644-3.045,4.023-5.022,4.364-3.208.553-5.309-2.036-4.58-5.157C2277.193,409.1,2279.34,407.442,2281.874,404.124Z"
                            transform="translate(-1031.592 4555.889)"
                          />
                          <path
                            id="Path_150"
                            data-name="Path 150"
                            d="M2238.509,299.04c1.2,2.052,3.447,4.2,3.274,6.127-.148,1.657-3.143,4.339-4.737,4.242-1.768-.107-4.669-2.816-4.717-4.461-.057-1.947,2.406-3.968,3.777-5.957Z"
                            transform="translate(-1023.782 4574.449)"
                          />
                          <path
                            id="Path_151"
                            data-name="Path 151"
                            d="M2307.013,368.038c-3.361,2.3-5.143,4.452-7.132,4.665-3,.32-5.094-1.852-4.919-5.142.173-3.229,2.2-5.321,5.352-4.545C2302.3,363.505,2303.889,365.6,2307.013,368.038Z"
                            transform="translate(-1034.838 4563.175)"
                          />
                        </g>
                      </svg>
                    }
                    label="Short Time to Market"
                    info="Our Shopify development team understands how important time is to you, to ensure you meet all your launch deadlines, we always go the extra mile."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 189.208 249.291"
                      >
                        <g
                          id="Group_52"
                          data-name="Group 52"
                          transform="translate(-295.956 -5234.099)"
                        >
                          <path
                            id="Path_152"
                            data-name="Path 152"
                            d="M1188.563,1060.3c.1-5.065-.013-9.994-.331-14.648-1.671-24.437-21.123-45.537-45.246-49.08a141.083,141.083,0,0,0-14.523-1.1c-2.314-.1-4.629-.192-6.92-.337l-1.47-.093-.227-1.455c-1.653-10.644,1.064-17.548,9.086-23.085,22.755-15.7,31.257-44.907,20.673-71.015-10.4-25.662-37.095-40.674-64.923-36.5a59.974,59.974,0,0,0-48.9,44.849c-5.733,23.692,3.278,48.565,22.426,61.894,9.064,6.311,12.035,13.606,9.934,24.4l-.289,1.483h-1.511q-1.667,0-3.309.007c-2.314.008-4.709.015-7.083-.014q-.4-.005-.8-.005a54.544,54.544,0,0,0-37.6,14.388c-13.939,12.572-19.612,29.062-17.854,51.9.271,3.508,2.422,5.142,6.769,5.144,63.666.025,121.045.023,175.414-.005C1186.6,1067.009,1188.469,1065.128,1188.563,1060.3Zm-122.91-98.77c-15.776-11.556-22.573-27.825-19.654-47.048,2.763-18.2,13.56-31.368,31.224-38.095,22.7-8.647,48.5,1.221,59.984,22.958a48.422,48.422,0,0,1-14.6,62.146c-5.462,3.9-10.855,8.508-13.307,15.767-.582,1.726-2.457,2.518-4.111,3.215a16.142,16.142,0,0,0-1.616.748l-1.382.79-2.513-3.237v-.628q0-4.251-.01-8.5c-.016-9.044-.032-18.366.12-27.54.035-2.17,1.6-4.323,2.9-5.747,1.639-1.794,3.372-3.5,5.048-5.157,1.581-1.56,3.166-3.125,4.639-4.717,2.539-2.747,2.661-6.211.294-8.424-2.427-2.27-5.371-2.091-8.073.492-1.919,1.834-3.687,3.824-5.925,6.345-1.124,1.265-2.353,2.648-3.759,4.189l-1.455,1.594-1.339-1.692c-.95-1.2-1.818-2.347-2.643-3.438a65.545,65.545,0,0,0-4.835-5.926c-1.957-2.041-3.936-3.121-5.724-3.124a5.013,5.013,0,0,0-3.642,1.735,5.446,5.446,0,0,0-1.6,4.243,6.614,6.614,0,0,0,2.879,4.641c9.786,7.3,13.625,16.814,12.085,29.934a101.492,101.492,0,0,0-.274,14.6c.066,2.206.132,4.483.132,6.726v1.366l-1.307.392c-2.3.688-7.075,2.123-8.982-4.137S1071.389,965.731,1065.653,961.53Zm35.877,51.606a13.374,13.374,0,0,1-14.91,0c-7.394-4.6-6.943-12.063-6.545-18.65l.131-2.2h27.734l.132,2.17C1108.474,1001.054,1108.927,1008.527,1101.531,1013.136Zm75.533,40.8-.17,1.647H1011.466l-.231-1.566c-1.767-11.928,1.454-22.752,9.317-31.3,10.361-11.264,27.634-17,47.381-15.746l1.174.076.421,1.1c4.64,12.1,12.733,18.091,24.742,18.3q.246,0,.489,0c10.633,0,18.836-6.252,23.723-18.08l.39-.943,1.006-.165c17-2.819,33.191,1.614,44.407,12.16A40.661,40.661,0,0,1,1177.064,1053.934Z"
                            transform="translate(-703.434 4416.354)"
                          />
                          <path
                            id="Path_153"
                            data-name="Path 153"
                            d="M1131.707,822.806a33.93,33.93,0,0,0,.106-5.5c-.029-.868-.057-1.738-.059-2.6,0-.944.026-1.891.055-2.838h0a36.15,36.15,0,0,0-.12-5.77c-.387-2.95-2.2-4.508-5.25-4.508-3.172.015-5.077,1.638-5.268,4.454a122.407,122.407,0,0,0,.016,16.94c.2,2.8,2.1,4.4,5.216,4.4C1129.5,827.366,1131.316,825.784,1131.707,822.806Z"
                            transform="translate(-735.779 4432.516)"
                          />
                          <path
                            id="Path_154"
                            data-name="Path 154"
                            d="M1073.288,837.906c-.948-1.441-1.867-2.864-2.77-4.264a145.571,145.571,0,0,0-9.314-13.333,3.762,3.762,0,0,0-.891-.078,8.486,8.486,0,0,0-4.394,1.1c-1.172,1-2.153,4.345-1.64,5.6a62.439,62.439,0,0,0,8.581,14.763c.732.932,4.057,1.771,5.853,1.232.952-.285,2.033-1.71,3.178-3.218l.587.44-.585-.443C1072.313,839.145,1072.778,838.531,1073.288,837.906Z"
                            transform="translate(-718.009 4427.551)"
                          />
                          <path
                            id="Path_155"
                            data-name="Path 155"
                            d="M1178.825,835.443a5.538,5.538,0,0,0-.418,4.318,4.885,4.885,0,0,0,2.539,2.869c3.016,1.459,5.52.881,7.241-1.666,2.319-3.435,4.383-7.17,6.38-10.781h0l.518-.936A23,23,0,0,0,1196.43,826c.172-.474.353-.971.555-1.506-.3-.363-.589-.735-.874-1.1a12.743,12.743,0,0,0-3.378-3.408,4.38,4.38,0,0,0-2.107-.566,4.883,4.883,0,0,0-4.041,2.543C1183.918,826.12,1181.309,830.655,1178.825,835.443Z"
                            transform="translate(-751.022 4427.767)"
                          />
                          <path
                            id="Path_156"
                            data-name="Path 156"
                            d="M1005.148,876.828A135.724,135.724,0,0,0,1018.3,885.8l.119.075c1.407.884,2.845,1.787,4.31,2.726.58-.514,1.155-.989,1.715-1.453,1.608-1.33,2.986-2.471,3.292-3.55.448-1.575-.49-4.764-1.672-5.688a57.417,57.417,0,0,0-14.377-8.294,2.386,2.386,0,0,0-.819-.118,8.151,8.151,0,0,0-5.128,2.068C1004.893,872.545,1004.784,876.142,1005.148,876.828Z"
                            transform="translate(-704.914 4414.435)"
                          />
                          <path
                            id="Path_157"
                            data-name="Path 157"
                            d="M1220.724,884.489c1.66,2.854,4.667,3.6,7.841,1.955a113.948,113.948,0,0,0,12.553-7.3,9.506,9.506,0,0,0,2.341-3.043c.136-.239.261-.457.382-.657a6.733,6.733,0,0,0-2.785-5.729h0a4.784,4.784,0,0,0-2.6-.748,5.847,5.847,0,0,0-2.617.649c-3.792,1.89-7.818,4.185-12.672,7.223C1220,878.818,1219.092,881.677,1220.724,884.489Z"
                            transform="translate(-762.146 4414.577)"
                          />
                        </g>
                      </svg>
                    }
                    label="Shopify Design Expertise"
                    info="Our Shopify UI/UX engineers who specialize in e-commerce efficiency, help us develop Shopify products that are easy for the consumer to use."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 250.106 249.783"
                      >
                        <g
                          id="Group_53"
                          data-name="Group 53"
                          transform="translate(-745.238 -5231.013)"
                        >
                          <path
                            id="Path_158"
                            data-name="Path 158"
                            d="M1640.833,1008.226c-14.489-15.131-15.337-32.819-2.437-45.576a29.891,29.891,0,0,1,41.781-.529c13.446,12.819,12.781,30.223-1.625,45.866l15.628,10.563a50.593,50.593,0,0,1,24.161-21.952c-8.46-7.234-12.657-16.044-11.793-26.764a29.6,29.6,0,0,1,10.422-20.284,30.016,30.016,0,0,1,41.07,1.57c12.691,12.712,11.776,29.559-2.463,45.324,15.458,9.935,15.953,10.4,23.637,22.051l15.77-10.582c-7.962-6.862-12.2-15.662-11.3-26.409a29.558,29.558,0,0,1,10.1-19.936,29.976,29.976,0,0,1,41.078.957c12.975,12.722,12.216,29.209-2.254,45.852,12.447,5.918,21.776,14.888,26.085,28.132a63.54,63.54,0,0,1,2.84,16.18c.458,8.761.163,17.565.107,26.35-.031,4.986-1.707,6.655-6.765,6.655q-118.091.03-236.181,0c-5.379,0-6.988-1.576-6.937-6.967.1-11.049-.556-22.2.735-33.121,1.967-16.646,11.453-28.614,26.4-36.2C1639.466,1009.119,1639.995,1008.74,1640.833,1008.226Zm133.882,67.514c0-12.709.456-25.213-.107-37.672-.844-18.653-16.866-34.252-35.436-35.312-19.07-1.09-36.791,11.818-39.418,30.462-1.711,12.14-.865,24.64-1.151,36.978-.043,1.866-.006,3.734-.006,5.512h56.677c0-4.6.068-8.961-.021-13.315-.072-3.526,1.047-6.5,4.864-6.55s5.03,2.807,4.932,6.4c-.123,4.486-.029,8.978-.029,13.5Zm-85.853.032c0-8.147-.067-15.913.022-23.678a171.649,171.649,0,0,1,.658-17.971c.383-3.266-.133-5.645-2.391-7.846-10.588-10.315-23.113-14.359-37.457-10.452-14.092,3.838-23.915,13.165-26.77,27.437-2.094,10.469-1.4,21.5-1.957,32.509Zm95.656-.123h67.4c0-7.93.2-15.547-.041-23.151-.5-16.068-7.973-28.043-22.6-34.635-14.466-6.522-28.135-4.006-40.458,5.982-3.9,3.163-6.5,6.541-4.583,12.07.76,2.191.271,4.83.275,7.266C1784.528,1053.884,1784.518,1064.587,1784.518,1075.649Zm-27.335-103.172a20.492,20.492,0,1,0-20.531,20.456A20.7,20.7,0,0,0,1757.183,972.478Zm-77.134,11.452a20.493,20.493,0,1,0-20.266,20.723A20.715,20.715,0,0,0,1680.048,983.93Zm154.268.407a20.493,20.493,0,1,0-20.674,20.315A20.714,20.714,0,0,0,1834.316,984.337Z"
                            transform="translate(-866.436 4395.087)"
                          />
                          <path
                            id="Path_159"
                            data-name="Path 159"
                            d="M1742.072,899.88c.756-4.364,1.883-9.129,2.275-13.954a9.486,9.486,0,0,0-1.994-6.237c-2.793-3.351-6.62-5.878-9.2-9.355-1.622-2.187-2.907-5.833-2.2-8.177.637-2.108,4.039-3.665,6.517-4.84a12.943,12.943,0,0,1,6.2-.95c8.256.571,12.793-3.581,15.107-11.08a14.027,14.027,0,0,1,2.866-5.58c1.9-1.958,4.42-4.549,6.691-4.568s5.215,2.345,6.7,4.475c2.476,3.548,3.767,7.9,6.077,11.594a9.764,9.764,0,0,0,5.179,3.945c3.878,1.069,7.974,1.357,11.986,1.924,3.532.5,6.788,1.5,7.967,5.338,1.088,3.54-.521,6.261-3.066,8.645-3.2,3-6.482,5.945-9.367,9.231a7.283,7.283,0,0,0-1.565,5.051c.517,4.659,1.735,9.237,2.368,13.89.931,6.854-4.486,10.9-10.787,8.02-5.288-2.414-10.4-7.143-15.631-7.194-5.019-.05-10.02,4.732-15.147,7.139C1747.161,909.963,1741.869,906.555,1742.072,899.88Zm26.552-51.386c-3.211,5.34-4.992,11.23-8.957,14.084-4.061,2.923-10.26,2.872-15.527,4.123l9.2,28.807c5.022-2.086,10.072-5.842,15.1-5.809,5.1.035,10.185,3.808,16.562,6.483-5.948-12.674-2.534-22.126,8.451-29.422a94.315,94.315,0,0,0-11.649-2.041c-3.654-.424-6.344-1.852-7.831-5.539C1772.538,855.645,1770.567,852.327,1768.624,848.494Z"
                            transform="translate(-898.139 4423.583)"
                          />
                          <path
                            id="Path_160"
                            data-name="Path 160"
                            d="M1719.279,814.868a30.057,30.057,0,0,1,4.334,2.885c5.01,4.864,9.92,9.832,14.846,14.782,2.447,2.458,3.673,5.272.743,8.023-2.741,2.574-5.357,1.193-7.641-1.106-5.15-5.184-10.459-10.226-15.353-15.642-1.1-1.219-1.367-3.891-.912-5.6C1715.643,816.911,1717.741,816.079,1719.279,814.868Z"
                            transform="translate(-893.966 4428.979)"
                          />
                          <path
                            id="Path_161"
                            data-name="Path 161"
                            d="M1818.372,842.7c-1.206-.97-3.091-1.779-3.652-3.136s-.456-3.88.459-4.863c5.636-6.049,11.435-11.972,17.567-17.509,1.09-.984,4.7-.721,5.856.354,1.134,1.049,1.6,4.753.681,5.773-5.643,6.254-11.741,12.1-17.757,18.009C1820.9,841.942,1819.816,842.092,1818.372,842.7Z"
                            transform="translate(-920.399 4428.524)"
                          />
                          <path
                            id="Path_162"
                            data-name="Path 162"
                            d="M1785.042,807.4c0,1.782.6,3.89-.147,5.267-1.012,1.864-3.052,4.365-4.661,4.373s-4.2-2.492-4.627-4.3c-.769-3.222-.308-6.757-.225-10.157.079-3.224,1.911-5.75,5-5.095,1.836.39,3.483,3.1,4.559,5.12.673,1.262.125,3.174.125,4.8Z"
                            transform="translate(-909.962 4433.636)"
                          />
                          <path
                            id="Path_163"
                            data-name="Path 163"
                            d="M1812.656,1082.9c-2.433-3.144-4.585-4.734-4.93-6.649-.508-2.828,1.55-5.324,4.533-4.77,1.82.338,4.476,2.633,4.566,4.177C1816.934,1077.53,1814.733,1079.535,1812.656,1082.9Z"
                            transform="translate(-918.609 4360.684)"
                          />
                        </g>
                      </svg>
                    }
                    label="Technically Diverse Teams"
                    info="Our diverse technologies help us in developing Shopify stores that are fully integrated and work efficiently with all platforms."
                  />
                </>
              ) : (
                <>
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 265.762 265.806"
                      >
                        <g
                          id="Group_49"
                          data-name="Group 49"
                          transform="translate(-249.132 -4763.958)"
                        >
                          <path
                            id="Path_137"
                            data-name="Path 137"
                            d="M1026.679,310.981c-3.1-7.942-5.4-15.653-9.116-22.6-1.868-3.493-6.31-5.613-9.6-8.336-2.2-1.818-4.522-3.5-6.628-5.423-9.57-8.728-6.9-22.344,5.242-27.012.977-.376,1.934-.8,3.268-1.362-3.368-6.729-6.569-13.248-9.884-19.71a22.086,22.086,0,0,1-1.683-17.527c2.4-7.653-.444-12.624-8.137-15.353a63.506,63.506,0,0,1-7.534-2.663c-1.578-.8-3.814-2.422-3.819-3.684a6.945,6.945,0,0,1,3.007-4.935,143.431,143.431,0,0,1,45.339-18.245c19.393-4.384,39.06-3.076,58.65-3.066,6.887,0,14.056.16,20.608,1.992a43.473,43.473,0,0,1,29.706,55.215c-2.915,9.323-6.473,18.444-9.651,27.413,3.383,1.82,7.025,3.078,9.773,5.4,6.415,5.409,6.828,15.295,1.248,21.622a20.638,20.638,0,0,1-5.592,4.939c-13.452,6.887-16.273,20.556-21.848,33.34,11.34,0,22.167-.006,32.993,0,15.314.011,24.453,8.59,23.814,23.714-.4,9.5,1.259,15.6,10.608,21.219,16.306,9.8,23.5,26.183,23.841,45.284.108,6.068.036,12.141.013,18.211-.025,6.563-.739,7.262-7.512,7.264q-47.671.014-95.343,0H945.248c-9.664,0-9.911-.01-9.595-9.934s.092-20.087,2.081-29.736c3.309-16.052,13.358-27.777,27.9-35.265,3.479-1.792,4.547-3.78,4.3-7.385-.268-3.91-.107-7.852-.05-11.779.179-12.367,9.354-21.489,21.82-21.578C1003.251,310.917,1014.8,310.981,1026.679,310.981ZM978.415,417.756h180.055c0-27.856.009-55.332,0-82.808-.005-10.584-4.8-15.415-15.3-15.422q-38.834-.023-77.667-.005-36.156,0-72.311.01c-9.764.011-14.717,5.045-14.767,14.88-.018,3.571,0,7.142,0,10.713Zm35.425-182.719c10.171-6.761,19.673-13.083,29.18-19.4a44.01,44.01,0,0,1,24.671-7.57,47.212,47.212,0,0,0,6.355-.715c10.148-1.437,17.13-8.373,24.594-14.375,3.7-2.975,6.25-2.432,8.725,1.434,6.344,9.907,14.107,19.041,16.586,31.238a57.569,57.569,0,0,0,4.091-9.888c6.568-21.764-8.51-45.2-31.035-45.891a571.079,571.079,0,0,0-63.567,2.05c-13.759,1.115-26.723,6.453-39.659,13.483,13.154,6.253,16.208,15.982,12.168,28.664a8.858,8.858,0,0,0,.487,5.7C1008.612,224.8,1011.193,229.658,1013.839,235.037Zm50.488,29.006c-.071,1.245-.141,2.268-.185,3.292-.37,8.571-5.356,13.481-13.844,13.6-2.319.033-4.64.046-6.959,0-8.1-.173-13.3-5.348-13.442-13.448-.073-4.027-.013-8.056-.013-12.259-2.036,0-3.281-.026-4.525.007-1.2.032-2.4.125-4.031.214.6,19.39,5.381,37.187,15.012,53.6.66,1.126,2.923,1.838,4.448,1.848,18.377.125,36.758.186,55.132-.076a7.454,7.454,0,0,0,5.554-3.483c3.629-7.888,7.4-15.84,9.742-24.157,2.51-8.906,3.481-18.245,5.183-27.722H1107c0,4.094.051,7.975-.011,11.854-.134,8.388-5.333,13.5-13.81,13.623-2.32.034-4.641.045-6.959,0-7.881-.164-13.052-5.136-13.481-12.893-.075-1.348-.254-2.689-.382-4Zm50.869-17.356c1.9-19.706-2.6-33.826-14-44.656-.685.53-1.416,1.032-2.076,1.614-9.722,8.56-20.831,12.878-33.994,13.36-5.872.215-12.015,3.064-17.332,5.993-7.768,4.279-14.781,9.907-22.363,14.557-3.572,2.19-5.093,4.619-3.607,9.132h32.348c8.885,0,8.885,0,10.654,8.193h7.7c.528-7.844.877-8.187,8.206-8.191C1092.121,246.68,1103.506,246.686,1115.2,246.686Zm77.239,171.244c3.431-33.711-9.179-51.5-25.089-57.737V417.93Zm-222.87-.006V359.762c-22.127,10.77-28.04,32.672-24.783,58.162Zm68.667-162.473c1.286,5.743-2.731,12.436,2.84,16.073,2.906,1.9,10.617,1.785,11.805-.127,2.651-4.261,2.566-10.222,3.685-15.946Zm61.364.219h-19.143c.953,5.467.606,11.481,3.276,15.485,1.371,2.055,10.505,2.237,11.94.245C1098.482,267.495,1098.362,261.475,1099.6,255.67Zm-85.275,18.711c-.73-7.372-1.3-13.147-1.88-18.982-4.453-.355-7.326,1.795-8.031,5.614C1003.112,268.043,1009.657,269.685,1014.321,274.38Zm108.32-.817c8.83-5.893,11.09-8.7,9.87-12.611-1.161-3.728-3.68-5.952-8.089-5.534C1123.846,261.279,1123.278,267.068,1122.64,273.564Z"
                            transform="translate(-686.446 4603.086)"
                          />
                          <path
                            id="Path_138"
                            data-name="Path 138"
                            d="M1127.557,464.626a17.126,17.126,0,1,1-16.575-17.4A17.176,17.176,0,0,1,1127.557,464.626Zm-8.56-.242a8.569,8.569,0,1,0-8.474,8.526A8.682,8.682,0,0,0,1119,464.384Z"
                            transform="translate(-728.437 4526.854)"
                          />
                          <path
                            id="Path_139"
                            data-name="Path 139"
                            d="M1061.615,404.459l15.469,14.132-6.992,5.365c-5-5.017-10.778-10.53-16.122-16.434-.945-1.043-.9-4.454.072-5.519,5.353-5.89,11.133-11.393,17.149-17.41l6.183,6.371Z"
                            transform="translate(-717.783 4543.527)"
                          />
                          <path
                            id="Path_140"
                            data-name="Path 140"
                            d="M1153.357,425.2l-5.655-6.073,15.5-13.984-17.095-13.55,7.115-6.774c5.825,5.812,11.63,11.28,16.944,17.191,1,1.115.9,4.736-.15,5.925C1164.874,413.783,1159.245,419.2,1153.357,425.2Z"
                            transform="translate(-742.493 4543.466)"
                          />
                          <path
                            id="Path_141"
                            data-name="Path 141"
                            d="M1094.509,419.55l25.665-34.21,6.832,5.121-25.664,34.218Z"
                            transform="translate(-728.757 4543.328)"
                          />
                        </g>
                      </svg>
                    }
                    label="Top Shopify Developers"
                    info="Our highly experienced development team who have been working with Shopify since its origin, thrive in providing top quality services to our clients."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 145.3 247.378"
                      >
                        <g
                          id="Group_50"
                          data-name="Group 50"
                          transform="translate(-759.495 -4786.511)"
                        >
                          <path
                            id="Path_134"
                            data-name="Path 134"
                            d="M1631.117,315.3q0-49.072.011-98.145c.019-16.163,9.245-25.487,25.256-25.509q47.527-.065,95.054.005c15.5.029,24.927,9.5,24.937,25.092q.061,98.531,0,197.062c-.009,15.547-9.5,25.11-24.912,25.137q-47.913.086-95.827,0c-14.972-.034-24.478-9.65-24.5-24.721Q1631.053,364.755,1631.117,315.3Zm9.217,67.485h126.393a24.448,24.448,0,0,0,.378-2.791q.033-81.914,0-163.829c-.014-10.045-5.681-15.245-16.236-15.263q-47.139-.083-94.279,0c-11.172.021-16.215,5.286-16.241,16.8-.045,19.577-.013,39.154-.013,58.731Zm.008,10.114c0,8.075-.181,15.271.047,22.456.266,8.4,5.774,14.238,14.053,14.279q49.414.252,98.831,0c7.391-.034,12.567-4.511,13.432-11.493,1.024-8.255.241-16.735.241-25.241Z"
                            transform="translate(-871.609 4594.904)"
                          />
                          <path
                            id="Path_135"
                            data-name="Path 135"
                            d="M1681.792,348.277c1.23-7.336,2.873-14.638,3.5-22.025a13.87,13.87,0,0,0-2.792-9.212c-4.606-5.5-10.181-10.166-15.135-15.387-4.219-4.445-3.372-7.007,2.571-8.163,5.539-1.077,11.159-2.733,16.7-2.57,8.23.241,11.911-3.977,14.543-10.842a138.765,138.765,0,0,1,7.322-15.241c2.6-4.9,5.739-4.953,8.328-.024,3.1,5.9,6.106,11.873,8.655,18.022,2.1,5.074,5.177,7.537,10.889,7.84,6.63.351,13.224,1.724,19.789,2.9,5.184.93,5.789,3.932,2.4,7.51-5.122,5.415-10.876,10.266-15.68,15.934a13.831,13.831,0,0,0-2.851,9.21c.6,7.13,2.507,14.139,3.414,21.258.773,6.068-1.642,7.635-7.158,4.937-8.038-3.932-15.96-11.118-23.985-11.193-7.7-.071-15.421,7.248-23.223,11.137C1683.747,355.026,1681.778,353.815,1681.792,348.277Zm66.55-46.877-1.658-1.4c-5.335-.748-10.657-1.629-16.01-2.206-5.026-.542-8.408-2.594-10.284-7.667-1.886-5.1-4.715-9.847-7.694-15.89-2.961,5.921-5.7,10.084-7.174,14.656-2.191,6.807-7.106,8.653-13.336,9.282-4.639.468-9.243,1.289-14.695,2.074,6.114,6.586,13.743,11.421,15.857,18.022,2.167,6.765-1.065,15.257-2.222,25.553,14.717-13.994,28.619-13.447,43.606-1.324C1726.826,324.171,1732.424,311.1,1748.343,301.4Z"
                            transform="translate(-880.562 4576.393)"
                          />
                          <path
                            id="Path_136"
                            data-name="Path 136"
                            d="M1726.356,475.915c5.657.473,9.34,3.258,9.568,8.989.229,5.747-3.214,9.24-8.8,9.5-5.667.259-9.249-3.129-9.492-8.79C1717.385,479.9,1720.853,476.815,1726.356,475.915Z"
                            transform="translate(-894.64 4519.215)"
                          />
                        </g>
                      </svg>
                    }
                    label="Mobile-First Approach"
                    info="Mobile devices play a major role in the outburst of e-commerce sales, we make sure to deliver the best Shopify experience which is appealing to consumers."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 263.001 209.573"
                      >
                        <g
                          id="Group_51"
                          data-name="Group 51"
                          transform="translate(-1136.138 -4798.753)"
                        >
                          <path
                            id="Path_142"
                            data-name="Path 142"
                            d="M2382.717,407.306h14.051V291.719h-14.051c0,6.163,0,12.42,0,18.677,0,5.138.043,10.278-.026,15.415-.046,3.449-2.059,6.052-5.285,5.388-1.928-.4-4.649-3.435-4.711-5.36-.416-13-.251-26.028-.2-39.044.016-3.743,2.1-5.6,5.833-5.606,7.194,0,14.387-.031,21.581,0,6.037.026,7.461,1.463,7.463,7.6q.021,55.751.007,111.5c0,3.426.032,6.852-.008,10.277-.064,5.584-1.709,7.174-7.424,7.265-.685.011-1.37,0-2.055,0q-122.036,0-244.073,0c-4.09,0-9.247.716-9.311-5.166-.065-6.08,5.223-5.069,9.224-5.09,9.07-.047,18.141-.015,28.489-.015-27.016-18.738-40.589-43.363-37.364-75.525,2.388-23.807,14.163-42.624,34.036-55.964,37.271-25.017,91.763-13.9,114.4,34.376,39.426-18.376,73.571-42.419,93.957-83.578-1.86.476-3.023,1.185-3.846.9-2.181-.745-5.1-1.426-6.021-3.081-.7-1.26.591-4.866,2.062-5.878a181.883,181.883,0,0,1,16.346-9.606c3.648-1.984,6.533-.695,7.521,3.207a146.2,146.2,0,0,1,3.793,19.065c.2,1.721-2.027,4.629-3.845,5.468-2.974,1.373-4.793-.4-6.783-5.52-21.336,43.291-57.6,69.546-99.195,88.546.7,10.212,1.354,19.848,2.051,30.065h8.137c8.731,0,9.466.719,9.467,9.231q0,21.324,0,42.648v5.336h10.309v-5.272q0-38.539.006-77.076c0-6.459,1.309-7.743,7.811-7.766s13.017-.028,19.526,0c6.155.029,7.558,1.4,7.564,7.5q.028,38.281.008,76.561v5.976h10.309v-28.64c0-1.542.03-3.083-.005-4.624-.082-3.543,1.167-6.251,5.068-6.29s5.2,2.61,5.19,6.173c-.023,9.42-.007,18.841-.006,28.261Zm-94.074-69.128c-1.134-36.574-31.863-66.312-69.045-64.662-39,1.73-67.064,33.114-64.972,71.305,1.984,36.229,34.445,64.855,71.1,62.7C2261.669,405.41,2290.772,373.332,2288.643,338.178Zm62.939,69.257V327.79h-13.659v79.644Zm-59.554-.279h14.418v-46.6h-9.71C2288.892,375.493,2293.7,391.434,2292.028,407.156Zm-30.414-.03h20.077V389.561c-3.469,3.438-6.319,6.551-9.477,9.312C2269.035,401.655,2265.551,404.087,2261.614,407.125Z"
                            transform="translate(-1008.257 4590.462)"
                          />
                          <path
                            id="Path_143"
                            data-name="Path 143"
                            d="M2426.506,385.778c-2.4-3.262-4.535-4.94-4.9-6.938-.575-3.178,1.774-5.193,4.92-5.184s5.489,2.027,4.9,5.205C2431.058,380.858,2428.917,382.526,2426.506,385.778Z"
                            transform="translate(-1057.183 4561.268)"
                          />
                          <path
                            id="Path_144"
                            data-name="Path 144"
                            d="M2229.3,375.352c-9.566.015-17.145-9.074-14.972-18.4.729-3.132-.046-4.984-2.238-7.1-7.265-7.006-14.288-14.262-21.477-21.349-2.75-2.711-4.392-5.665-1.214-8.821,3.083-3.062,5.839-1.142,8.353,1.4,7.34,7.419,14.658,14.867,22.214,22.062,1.261,1.2,3.646,1.367,5.565,1.686,1.312.217,2.869-.563,4.057-.15,5.927,2.064,9.432-1.2,12.849-5.241,2.444-2.887,5.579-4.536,8.758-1.225,2.987,3.109,1.144,5.935-1.4,8.407-1.228,1.192-2.367,2.479-3.642,3.615-1.885,1.677-2.6,3.215-1.988,6.117C2246.287,366.424,2239.055,375.338,2229.3,375.352Zm.025-22.6c-2.459,3.253-5.188,5.351-4.888,6.834.416,2.046,2.9,4.758,4.893,5.14a4.094,4.094,0,0,0,4.735-5.1C2233.655,357.619,2231.626,355.952,2229.327,352.747Z"
                            transform="translate(-1015.896 4571.073)"
                          />
                          <path
                            id="Path_145"
                            data-name="Path 145"
                            d="M2282.7,317.288c1.327,2.063,3.749,4.184,3.643,6.169-.089,1.658-2.953,4.127-4.921,4.505-3.159.607-5.368-1.9-4.7-5.058.433-2.061,2.521-3.775,3.868-5.643Z"
                            transform="translate(-1031.597 4571.224)"
                          />
                          <path
                            id="Path_146"
                            data-name="Path 146"
                            d="M2242.928,431.768c-1.973,1.291-4.192,3.859-5.855,3.538-1.941-.373-4.354-3.1-4.708-5.133-.219-1.254,2.926-4.239,4.727-4.385,1.849-.15,3.9,2.213,5.862,3.476Q2242.942,430.516,2242.928,431.768Z"
                            transform="translate(-1023.787 4552.064)"
                          />
                          <path
                            id="Path_148"
                            data-name="Path 148"
                            d="M2281.874,404.124c2.231,3.66,4.592,5.834,4.442,7.818-.124,1.644-3.045,4.023-5.022,4.364-3.208.553-5.309-2.036-4.58-5.157C2277.193,409.1,2279.34,407.442,2281.874,404.124Z"
                            transform="translate(-1031.592 4555.889)"
                          />
                          <path
                            id="Path_150"
                            data-name="Path 150"
                            d="M2238.509,299.04c1.2,2.052,3.447,4.2,3.274,6.127-.148,1.657-3.143,4.339-4.737,4.242-1.768-.107-4.669-2.816-4.717-4.461-.057-1.947,2.406-3.968,3.777-5.957Z"
                            transform="translate(-1023.782 4574.449)"
                          />
                          <path
                            id="Path_151"
                            data-name="Path 151"
                            d="M2307.013,368.038c-3.361,2.3-5.143,4.452-7.132,4.665-3,.32-5.094-1.852-4.919-5.142.173-3.229,2.2-5.321,5.352-4.545C2302.3,363.505,2303.889,365.6,2307.013,368.038Z"
                            transform="translate(-1034.838 4563.175)"
                          />
                        </g>
                      </svg>
                    }
                    label="Short Time to Market"
                    info="Our Shopify development team understands how important time is to you, to ensure you meet all your launch deadlines, we always go the extra mile."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 189.208 249.291"
                      >
                        <g
                          id="Group_52"
                          data-name="Group 52"
                          transform="translate(-295.956 -5234.099)"
                        >
                          <path
                            id="Path_152"
                            data-name="Path 152"
                            d="M1188.563,1060.3c.1-5.065-.013-9.994-.331-14.648-1.671-24.437-21.123-45.537-45.246-49.08a141.083,141.083,0,0,0-14.523-1.1c-2.314-.1-4.629-.192-6.92-.337l-1.47-.093-.227-1.455c-1.653-10.644,1.064-17.548,9.086-23.085,22.755-15.7,31.257-44.907,20.673-71.015-10.4-25.662-37.095-40.674-64.923-36.5a59.974,59.974,0,0,0-48.9,44.849c-5.733,23.692,3.278,48.565,22.426,61.894,9.064,6.311,12.035,13.606,9.934,24.4l-.289,1.483h-1.511q-1.667,0-3.309.007c-2.314.008-4.709.015-7.083-.014q-.4-.005-.8-.005a54.544,54.544,0,0,0-37.6,14.388c-13.939,12.572-19.612,29.062-17.854,51.9.271,3.508,2.422,5.142,6.769,5.144,63.666.025,121.045.023,175.414-.005C1186.6,1067.009,1188.469,1065.128,1188.563,1060.3Zm-122.91-98.77c-15.776-11.556-22.573-27.825-19.654-47.048,2.763-18.2,13.56-31.368,31.224-38.095,22.7-8.647,48.5,1.221,59.984,22.958a48.422,48.422,0,0,1-14.6,62.146c-5.462,3.9-10.855,8.508-13.307,15.767-.582,1.726-2.457,2.518-4.111,3.215a16.142,16.142,0,0,0-1.616.748l-1.382.79-2.513-3.237v-.628q0-4.251-.01-8.5c-.016-9.044-.032-18.366.12-27.54.035-2.17,1.6-4.323,2.9-5.747,1.639-1.794,3.372-3.5,5.048-5.157,1.581-1.56,3.166-3.125,4.639-4.717,2.539-2.747,2.661-6.211.294-8.424-2.427-2.27-5.371-2.091-8.073.492-1.919,1.834-3.687,3.824-5.925,6.345-1.124,1.265-2.353,2.648-3.759,4.189l-1.455,1.594-1.339-1.692c-.95-1.2-1.818-2.347-2.643-3.438a65.545,65.545,0,0,0-4.835-5.926c-1.957-2.041-3.936-3.121-5.724-3.124a5.013,5.013,0,0,0-3.642,1.735,5.446,5.446,0,0,0-1.6,4.243,6.614,6.614,0,0,0,2.879,4.641c9.786,7.3,13.625,16.814,12.085,29.934a101.492,101.492,0,0,0-.274,14.6c.066,2.206.132,4.483.132,6.726v1.366l-1.307.392c-2.3.688-7.075,2.123-8.982-4.137S1071.389,965.731,1065.653,961.53Zm35.877,51.606a13.374,13.374,0,0,1-14.91,0c-7.394-4.6-6.943-12.063-6.545-18.65l.131-2.2h27.734l.132,2.17C1108.474,1001.054,1108.927,1008.527,1101.531,1013.136Zm75.533,40.8-.17,1.647H1011.466l-.231-1.566c-1.767-11.928,1.454-22.752,9.317-31.3,10.361-11.264,27.634-17,47.381-15.746l1.174.076.421,1.1c4.64,12.1,12.733,18.091,24.742,18.3q.246,0,.489,0c10.633,0,18.836-6.252,23.723-18.08l.39-.943,1.006-.165c17-2.819,33.191,1.614,44.407,12.16A40.661,40.661,0,0,1,1177.064,1053.934Z"
                            transform="translate(-703.434 4416.354)"
                          />
                          <path
                            id="Path_153"
                            data-name="Path 153"
                            d="M1131.707,822.806a33.93,33.93,0,0,0,.106-5.5c-.029-.868-.057-1.738-.059-2.6,0-.944.026-1.891.055-2.838h0a36.15,36.15,0,0,0-.12-5.77c-.387-2.95-2.2-4.508-5.25-4.508-3.172.015-5.077,1.638-5.268,4.454a122.407,122.407,0,0,0,.016,16.94c.2,2.8,2.1,4.4,5.216,4.4C1129.5,827.366,1131.316,825.784,1131.707,822.806Z"
                            transform="translate(-735.779 4432.516)"
                          />
                          <path
                            id="Path_154"
                            data-name="Path 154"
                            d="M1073.288,837.906c-.948-1.441-1.867-2.864-2.77-4.264a145.571,145.571,0,0,0-9.314-13.333,3.762,3.762,0,0,0-.891-.078,8.486,8.486,0,0,0-4.394,1.1c-1.172,1-2.153,4.345-1.64,5.6a62.439,62.439,0,0,0,8.581,14.763c.732.932,4.057,1.771,5.853,1.232.952-.285,2.033-1.71,3.178-3.218l.587.44-.585-.443C1072.313,839.145,1072.778,838.531,1073.288,837.906Z"
                            transform="translate(-718.009 4427.551)"
                          />
                          <path
                            id="Path_155"
                            data-name="Path 155"
                            d="M1178.825,835.443a5.538,5.538,0,0,0-.418,4.318,4.885,4.885,0,0,0,2.539,2.869c3.016,1.459,5.52.881,7.241-1.666,2.319-3.435,4.383-7.17,6.38-10.781h0l.518-.936A23,23,0,0,0,1196.43,826c.172-.474.353-.971.555-1.506-.3-.363-.589-.735-.874-1.1a12.743,12.743,0,0,0-3.378-3.408,4.38,4.38,0,0,0-2.107-.566,4.883,4.883,0,0,0-4.041,2.543C1183.918,826.12,1181.309,830.655,1178.825,835.443Z"
                            transform="translate(-751.022 4427.767)"
                          />
                          <path
                            id="Path_156"
                            data-name="Path 156"
                            d="M1005.148,876.828A135.724,135.724,0,0,0,1018.3,885.8l.119.075c1.407.884,2.845,1.787,4.31,2.726.58-.514,1.155-.989,1.715-1.453,1.608-1.33,2.986-2.471,3.292-3.55.448-1.575-.49-4.764-1.672-5.688a57.417,57.417,0,0,0-14.377-8.294,2.386,2.386,0,0,0-.819-.118,8.151,8.151,0,0,0-5.128,2.068C1004.893,872.545,1004.784,876.142,1005.148,876.828Z"
                            transform="translate(-704.914 4414.435)"
                          />
                          <path
                            id="Path_157"
                            data-name="Path 157"
                            d="M1220.724,884.489c1.66,2.854,4.667,3.6,7.841,1.955a113.948,113.948,0,0,0,12.553-7.3,9.506,9.506,0,0,0,2.341-3.043c.136-.239.261-.457.382-.657a6.733,6.733,0,0,0-2.785-5.729h0a4.784,4.784,0,0,0-2.6-.748,5.847,5.847,0,0,0-2.617.649c-3.792,1.89-7.818,4.185-12.672,7.223C1220,878.818,1219.092,881.677,1220.724,884.489Z"
                            transform="translate(-762.146 4414.577)"
                          />
                        </g>
                      </svg>
                    }
                    label="Shopify Design Expertise"
                    info="Our Shopify UI/UX engineers who specialize in e-commerce efficiency, help us develop Shopify products that are easy for the consumer to use."
                  />
                  <EcommerceWorkCodeCard
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 250.106 249.783"
                      >
                        <g
                          id="Group_53"
                          data-name="Group 53"
                          transform="translate(-745.238 -5231.013)"
                        >
                          <path
                            id="Path_158"
                            data-name="Path 158"
                            d="M1640.833,1008.226c-14.489-15.131-15.337-32.819-2.437-45.576a29.891,29.891,0,0,1,41.781-.529c13.446,12.819,12.781,30.223-1.625,45.866l15.628,10.563a50.593,50.593,0,0,1,24.161-21.952c-8.46-7.234-12.657-16.044-11.793-26.764a29.6,29.6,0,0,1,10.422-20.284,30.016,30.016,0,0,1,41.07,1.57c12.691,12.712,11.776,29.559-2.463,45.324,15.458,9.935,15.953,10.4,23.637,22.051l15.77-10.582c-7.962-6.862-12.2-15.662-11.3-26.409a29.558,29.558,0,0,1,10.1-19.936,29.976,29.976,0,0,1,41.078.957c12.975,12.722,12.216,29.209-2.254,45.852,12.447,5.918,21.776,14.888,26.085,28.132a63.54,63.54,0,0,1,2.84,16.18c.458,8.761.163,17.565.107,26.35-.031,4.986-1.707,6.655-6.765,6.655q-118.091.03-236.181,0c-5.379,0-6.988-1.576-6.937-6.967.1-11.049-.556-22.2.735-33.121,1.967-16.646,11.453-28.614,26.4-36.2C1639.466,1009.119,1639.995,1008.74,1640.833,1008.226Zm133.882,67.514c0-12.709.456-25.213-.107-37.672-.844-18.653-16.866-34.252-35.436-35.312-19.07-1.09-36.791,11.818-39.418,30.462-1.711,12.14-.865,24.64-1.151,36.978-.043,1.866-.006,3.734-.006,5.512h56.677c0-4.6.068-8.961-.021-13.315-.072-3.526,1.047-6.5,4.864-6.55s5.03,2.807,4.932,6.4c-.123,4.486-.029,8.978-.029,13.5Zm-85.853.032c0-8.147-.067-15.913.022-23.678a171.649,171.649,0,0,1,.658-17.971c.383-3.266-.133-5.645-2.391-7.846-10.588-10.315-23.113-14.359-37.457-10.452-14.092,3.838-23.915,13.165-26.77,27.437-2.094,10.469-1.4,21.5-1.957,32.509Zm95.656-.123h67.4c0-7.93.2-15.547-.041-23.151-.5-16.068-7.973-28.043-22.6-34.635-14.466-6.522-28.135-4.006-40.458,5.982-3.9,3.163-6.5,6.541-4.583,12.07.76,2.191.271,4.83.275,7.266C1784.528,1053.884,1784.518,1064.587,1784.518,1075.649Zm-27.335-103.172a20.492,20.492,0,1,0-20.531,20.456A20.7,20.7,0,0,0,1757.183,972.478Zm-77.134,11.452a20.493,20.493,0,1,0-20.266,20.723A20.715,20.715,0,0,0,1680.048,983.93Zm154.268.407a20.493,20.493,0,1,0-20.674,20.315A20.714,20.714,0,0,0,1834.316,984.337Z"
                            transform="translate(-866.436 4395.087)"
                          />
                          <path
                            id="Path_159"
                            data-name="Path 159"
                            d="M1742.072,899.88c.756-4.364,1.883-9.129,2.275-13.954a9.486,9.486,0,0,0-1.994-6.237c-2.793-3.351-6.62-5.878-9.2-9.355-1.622-2.187-2.907-5.833-2.2-8.177.637-2.108,4.039-3.665,6.517-4.84a12.943,12.943,0,0,1,6.2-.95c8.256.571,12.793-3.581,15.107-11.08a14.027,14.027,0,0,1,2.866-5.58c1.9-1.958,4.42-4.549,6.691-4.568s5.215,2.345,6.7,4.475c2.476,3.548,3.767,7.9,6.077,11.594a9.764,9.764,0,0,0,5.179,3.945c3.878,1.069,7.974,1.357,11.986,1.924,3.532.5,6.788,1.5,7.967,5.338,1.088,3.54-.521,6.261-3.066,8.645-3.2,3-6.482,5.945-9.367,9.231a7.283,7.283,0,0,0-1.565,5.051c.517,4.659,1.735,9.237,2.368,13.89.931,6.854-4.486,10.9-10.787,8.02-5.288-2.414-10.4-7.143-15.631-7.194-5.019-.05-10.02,4.732-15.147,7.139C1747.161,909.963,1741.869,906.555,1742.072,899.88Zm26.552-51.386c-3.211,5.34-4.992,11.23-8.957,14.084-4.061,2.923-10.26,2.872-15.527,4.123l9.2,28.807c5.022-2.086,10.072-5.842,15.1-5.809,5.1.035,10.185,3.808,16.562,6.483-5.948-12.674-2.534-22.126,8.451-29.422a94.315,94.315,0,0,0-11.649-2.041c-3.654-.424-6.344-1.852-7.831-5.539C1772.538,855.645,1770.567,852.327,1768.624,848.494Z"
                            transform="translate(-898.139 4423.583)"
                          />
                          <path
                            id="Path_160"
                            data-name="Path 160"
                            d="M1719.279,814.868a30.057,30.057,0,0,1,4.334,2.885c5.01,4.864,9.92,9.832,14.846,14.782,2.447,2.458,3.673,5.272.743,8.023-2.741,2.574-5.357,1.193-7.641-1.106-5.15-5.184-10.459-10.226-15.353-15.642-1.1-1.219-1.367-3.891-.912-5.6C1715.643,816.911,1717.741,816.079,1719.279,814.868Z"
                            transform="translate(-893.966 4428.979)"
                          />
                          <path
                            id="Path_161"
                            data-name="Path 161"
                            d="M1818.372,842.7c-1.206-.97-3.091-1.779-3.652-3.136s-.456-3.88.459-4.863c5.636-6.049,11.435-11.972,17.567-17.509,1.09-.984,4.7-.721,5.856.354,1.134,1.049,1.6,4.753.681,5.773-5.643,6.254-11.741,12.1-17.757,18.009C1820.9,841.942,1819.816,842.092,1818.372,842.7Z"
                            transform="translate(-920.399 4428.524)"
                          />
                          <path
                            id="Path_162"
                            data-name="Path 162"
                            d="M1785.042,807.4c0,1.782.6,3.89-.147,5.267-1.012,1.864-3.052,4.365-4.661,4.373s-4.2-2.492-4.627-4.3c-.769-3.222-.308-6.757-.225-10.157.079-3.224,1.911-5.75,5-5.095,1.836.39,3.483,3.1,4.559,5.12.673,1.262.125,3.174.125,4.8Z"
                            transform="translate(-909.962 4433.636)"
                          />
                          <path
                            id="Path_163"
                            data-name="Path 163"
                            d="M1812.656,1082.9c-2.433-3.144-4.585-4.734-4.93-6.649-.508-2.828,1.55-5.324,4.533-4.77,1.82.338,4.476,2.633,4.566,4.177C1816.934,1077.53,1814.733,1079.535,1812.656,1082.9Z"
                            transform="translate(-918.609 4360.684)"
                          />
                        </g>
                      </svg>
                    }
                    label="Technically Diverse Teams"
                    info="Our diverse technologies help us in developing Shopify stores that are fully integrated and work efficiently with all platforms."
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
