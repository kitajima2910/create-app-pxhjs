# PXH Language Support

Support highlight and IntelliSense **PXH** syntax:

-   `pxh[css]: {}`
-   `pxh[html]: {}`
-   `pxh[js]: {}`
-   `HTML Tags`
-   `CSS Properties`
-   `JS Functions`

## Example

```pxh
pxh[css]: {

    body {
        background-color: black;
        width: 100vw;
        height: 100vh;
        margin: 0;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        color: hotpink;
        cursor: pointer;
        font-weight: bold;
        font-size: 5rem;
    }
}

pxh[html]: {
    <p onclick="message()">Hello, World! - PXH</p>
}

pxh[js]: {
    const message = () => {
        alert('Hello, World! - PXH');
    }
}
```
