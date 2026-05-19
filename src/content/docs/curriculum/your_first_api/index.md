---
title: Your First API
description: Create your first RESTful API with FastAPI
---

# Hello FastAPI

In this course, you will learn how to develop an application that implements a REST web API. The package we will use is called **FastAPI**. FastAPI is a Python framework that uses modern language features such as async and type hints to easily configure web APIs. It is open source and actively maintained on GitHub. It has enjoyed remarkable success since being first released. Even though it is newer, FastAPI has more stars on GitHub than either Flask, or Django.

## Onboarding

I won't spend a lot of time on configuring a development environment. Developing a FastAPI application doesn't need much more than any other Python application. If you want to know more about the development environment used in this course, I would refer you to the [onboarding section of the Python QuickStart](https://pyquickst.art/curriculum/module01/). There you can learn about how to set up GitHub Codespaces for Python development. In this course, we will only use a couple of extensions for database exploration, making HTTP requests, and containers.

First, install the **SQLite3 Editor** extension by **yy0931**. We will eventually wire the API up to a database. This extension lets you peek inside and see the data at a glance. Next, install the **REST Client** extension by **Huachao Mao**. Instead of writing code to make HTTP requests to the API we will be developing, we will use this extension. It lets us configure HTTP requests in a text files and then execute them and see the results. Install the **Docker** extension from **Microsoft**. This extension will provide editor support for Dockerfiles and manage containers and images. We won't deploy the containerized API in this course. However, we will get close.

## FastAPI Boilerplate

Before we can use the FastAPI package, it must be installed.

```bash
$ pip install "fastapi[standard]"
```

The `[standard]` is what is referred to as an "extra". The `fastapi` package includes only the core framework. However, during development other packages such as `uvicorn` as often used. The `[standard]` extra installs some of these packages and utilities.

In a file `main.py`, import the `FastAPI` application class from the `fastapi` module.

```python
from fastapi import FastAPI
```

And create a new instance of the application class.

```python
app = FastAPI()
```

One of the more commonly used keyword arguments to the `FastAPI` initializer is `title`. You'll see how this is used by FastAPI shortly.

```python
app = FastAPI(title="Cryptocurrency Portfolio Manager API")
```

## Routing HTTP Requests

In FastAPI, HTTP requests are routed to plain old Python functions. The endpoint the request is sent to determines the function that is executed. Let's write a function that simply returns a status to the client.

```python
def api_status():
    return {"status": "ok"}
```

This is a Python function that returns a dictionary. When used to handle an HTTP request, FastAPI will convert the returned dictionary into JSON and include it in the body of an HTTP response. The next step is to map the function to an HTTP endpoint. When a request is sent to the endpoint, FastAPI will invoke the function.

```python

```
