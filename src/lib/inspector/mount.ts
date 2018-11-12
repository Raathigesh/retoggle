export function mount() {
  const id = "retoggle-mount-root";
  let inspectorRoot = document.getElementById(id);

  if (inspectorRoot) {
    return inspectorRoot;
  }

  inspectorRoot = document.createElement("div");
  inspectorRoot.setAttribute("id", id);
  document.body.appendChild(inspectorRoot);
  return inspectorRoot;
}
