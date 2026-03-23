import { Link } from "@/utils";

export const Footer: React.FC = () => (
  <footer>
    <p>
      除非另有声明，本网站内容采用
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享</a>
      授权。
    </p>
    <p>
      <a href="https://xzonn.top/">Xzonn 制作</a> - <Link to="/关于网站">关于网站</Link> -{" "}
      <a href="https://space.bilibili.com/16114399">bilibili</a> - <a href="https://ifdian.net/a/Xzonn">爱发电</a> -{" "}
      <a href="https://github.com/Xzonn/PokemonLZADatabase">GitHub</a>
    </p>
    <p>
      <a href="https://beian.miit.gov.cn/">京ICP备20005737号</a>
    </p>
  </footer>
);
