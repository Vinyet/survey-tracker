import styled from 'styled-components';

const HeaderStyle = styled.div`
    header {
        background-color: #000;
        color: #fff;
        font-family: sans-serif;
        position: relative;
        padding-bottom: 15px;
        h1 {
            padding-left: 40px;
            padding-top: 25px;
            margin: 0;
            font-size: 1.7em;
        }
        h2 {
            padding-left: 45px;
            padding-bottom: 20px;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
        } 
        .tab-links {
            position: absolute;
            top: 0;
            right: 200px;
            padding-top: 20px;
            display: flex;
            gap: 20px;
            a {
                text-decoration: none;
                color: #fff;
                padding: 5px 15x;
                outline: none;
                transition: border-bottom 0.4s ease;
                &:hover {
                    border-bottom: 1px solid red;
                }
            }
        }
    }
}
`

export default HeaderStyle;
