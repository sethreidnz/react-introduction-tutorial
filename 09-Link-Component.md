``` shell
git checkout step-9
```

The `Link` component is another component from React Router that lets you create links to routes. For example

``` javascript
<Link to='/dashboard' />
```

Or the case of my list of employees I have added a link to the `EmployeeListItem` component:

``` javascript
const EmployeeListItem = ({employee}) => (
    <li className="collection-item avatar">
        <img src={employee.avatar} alt={employee.name} className="circle" />
        <span className="title">{employee.firstName} {employee.lastName}</span>
        <p>{employee.role} <br/>
        {employee.team}
        </p>
        <Link  to={'/employee/' + employee.id} className="secondary-content btn black">
            <i className="material-icons left">description</i>
                View C.V.
        </Link>
    </li>
)
```

I have calculated the path and built up the path that would match a url such as:

```
http://localhost:3000/employee/2813a9b5-d5d0-4b3a-a7bb-a7f275516b1d
```

This is perfect but now we need to add that route. See the [next section]()