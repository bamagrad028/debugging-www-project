
function domainName(url) {
const regexify = str => {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
};

const getDomain = url => {
  const parseResult = parse(url);
  console.log(parseResult);
  if (parseResult.domain) {
    return parseResult.domain.replace(
      RegExp(regexify("." + parseResult.publicSuffix) + "$"),
      ""
    );
  } else {
    return parseResult.hostname;
  }
};
}
const elInput = document.getElementById("input");
const elOutput = document.getElementById("output");

elInput.addEventListener("input", e => {
  elOutput.innerText = getDomain(elInput.value);
});

// For debugging
const elDebugTable = document.getElementById("debugTable");
elInput.addEventListener("input", e => {
  elDebugTable.innerHTML = "";
  const parseResult = parse(elInput.value);
  for (const key in parseResult) {
    const row = document.createElement("tr");
    elDebugTable.appendChild(row);
    const tdKey = document.createElement("td");
    tdKey.innerHTML = key;
    const tdValue = document.createElement("td");
    tdValue.innerHTML = parseResult[key];
    row.appendChild(tdKey);
    row.appendChild(tdValue);
  }
});
