package com.requestcli.listeners;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AppContextListener implements ServletContextListener {
    @Override
    public void
    contextInitialized(ServletContextEvent servletContextEvent)
    {
        ServletContext ctx = servletContextEvent.getServletContext();

        ExecutorService executor = Executors.newFixedThreadPool(100);
        ctx.setAttribute("executor", executor);
    }

    @Override
    public void
    contextDestroyed(ServletContextEvent servletContextEvent)
    {
        ExecutorService executor =
                (ExecutorService)
                        servletContextEvent.getServletContext().getAttribute("executor");

        executor.shutdown();
    }
}
