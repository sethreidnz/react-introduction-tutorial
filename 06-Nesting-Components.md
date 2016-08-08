```
git checkout step-6
```

When building a React application you go through a process of nesting components within components. This 
results in a component heirarchy. Although it may not have been obvious we have been already doing This
with our `App` component and our nested HTML components (in React the html elements are essentailly components)
and out `EmployeeListItem` component.

## Chilren and component nesting

When you have a component and nest another component inside of it you are creating a parent -> child relationship.
Take this JSX snippit:

``` javasciprt
<EmployeeList>
    <EmployeeListItem />
</EmployeeList>
```

I have created an EmployeeList component which I have nested my EmployeeListItem into. What this does is gives the 
EmployeeList component access to its `children` as the `props.children` key on the props passed to it.

If you look at the `EmployeeList` component it now uses this to render the children in its output:

``` javascript
import React, { PropTypes } from 'react'

const EmployeeList = ({children}) => (
    <div className="employee-list">
        <h3>Current Employees</h3>
        <ul className="collection">
            {children}
        </ul>
    </div>
)

EmployeeList.PropTypes = {
    children: PropTypes.array
}

export default EmployeeList
```

Nesting our EmployeeListItems like this:

``` javascript
<EmployeeList>
    {employees.map((employee) => {
    return <EmployeeListItem key={employee.id} employee={employee} />
    })}
</EmployeeList>

```

This is equivilent to writing

```

<EmployeeList>
    <EmployeeListItem key={employees[0].id} employee={employees[0]} />
    <EmployeeListItem key={employees[1].id} employee={employees[1]} />
    <EmployeeListItem key={employees[2].id} employee={employees[2]} />
    { etc... }
</EmployeeList>
```

The parent component will recieve the array of components as `props.children`. However if there is only
one component it will receive the component itself without the array wrapper for performance reasons.

Now that I have shown you how to nest components. What if we want to switch between? See the [next step]().
