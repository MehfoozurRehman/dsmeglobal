import React from "react";
import EcomereceProjectsCard from "../components/EcomereceProjectsCard";

export function UiUXDesignWork() {
  return (
    <>
      <div className="june_main_container_first_container">
        <div className="june_main_container_first_container_title">
          Design <span> Work</span>
        </div>
        <div className="june_main_container_para">
          <p className="june_main_container_first_container_para">
            You can now bring your apps to life with our intuitive and intricate
            designs, just like some of our below clients.
          </p>
        </div>
      </div>
      <div className="ecommerce__screen__container__recent__work">
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
    </>
  );
}
