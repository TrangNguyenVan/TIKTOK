useState Hook
### Khi nào sử dụng useState
Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật(render lại trạng thái dữ liệu)
## Cách sử dụng
```jsx
import {useState} from 'react';
function Component() {
    const [state,setState] = useState(initState)
    .....
}