<style>
  @media (prefers-color-scheme: dark) {
    :global(body) {
      color: white;
      background-color: black;
    }
  }
  @media (prefers-color-scheme: light) {
    :global(body) {
      color: black;
      background-color: white;
    }
  }
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #wrapper h1 {
    font-family: "Fira Code";
  }
  #wrapper a:any-link {
    color: unset;
  }
</style>

<script>
  import Icon from "svelte-awesome";
  import { envelopeSquare, githubSquare, linkedinSquare } from "svelte-awesome/icons";
</script>

<div id="wrapper">
  <h1>&lt;EzraBrooks/&gt;</h1>
  <div id="icons">
    <a href="https://github.com/EzraBrooks">
      <Icon data={githubSquare} style="height: 5ch; width: 5ch;"/>
    </a>
    <a href="https://linkedin.com/in/ezra-brooks">
      <Icon data={linkedinSquare} style="height: 5ch; width: 5ch;"/>
    </a>
    <a href="mailto:bytes-legwork.0q@icloud.com">
      <Icon data={envelopeSquare} style="height: 5ch; width: 5ch;"/>
    </a>
  </div>
</div>

