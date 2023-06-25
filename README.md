## How to run

- Install packages:
```bash
npm install
```
- Run project on localhost:8000
```bash
npm run dev
```

node version: 16.15.0


## Answer follow up questions

### Implementation
1. What libraries did you use? What are they used for? Why did you choose them
specifically?
```text
I used React according to task requirement.
And some additional libraries are used as follows.

Styling: @material-tailwind/react
I chosen this because it makes develop easy to develop beautiful UI by using tailwindcss and components from material ui.

Store management: zustand
There are many libraries for store management such as redux, mobx and zustand etc.
Zustand is the best option for small app and it's easy to understand and use.
So I chosen zustand for store management.

Form validation: react-hook-form
I chosen this library for handling form because it's flexible and extensible with easy-to-use validation.

API: axios
For fetching data from weather service, I used this library.

```

2. What improvements or new features would you add if you had more time to work on
   the problem?
```text
If I had more time to work, I would try to install Docker and add unit test.
```
3. Which parts did you find most difficult and which parts did you spend the most time
   with?
```text
There was no difficult parts. I think I spent the most time with CRUD operation.
```
4. What are key things to consider when deploying this application for customer
   use/production?
```text
Software deployment process mainly consists of 3 stages – development, testing and monitoring.
```

### Feedback
1. How did you find the challenge overall? Did you have any issues or have difficulties
   completing?
```text
There was no difficulties overall. This was so easy for me to do.
```

21. We would love to hear any suggestions or improvements you have to make this
    challenge better!
```text
For displaying weather, user can either point the location he wants on google map or enter latitude and longitude through input.

In handling schedules, there should be status which shows schedule is completed or not.
And user can change status (completed, pending etc) by status dropdown in schedule card directly without opening form modal.
```
