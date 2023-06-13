function addOptiflowDiv() {
  const leftSidebarLinks = document.querySelector('.left-sidebar-links');

  if (leftSidebarLinks) {
    const div = document.createElement('div');
    div.classList.add('button', 'top', 'optiflow');
    div.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"  zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="18px" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="31b0b1f54e"><path d="M 25.019531 66 L 349.734375 66 L 349.734375 188 L 25.019531 188 Z M 25.019531 66 " clip-rule="nonzero"/></clipPath><clipPath id="07939112ee"><path d="M 25.019531 0 L 349.734375 0 L 349.734375 120.878906 L 25.019531 120.878906 Z M 25.019531 0 " clip-rule="nonzero"/></clipPath><clipPath id="ea057c28cd"><path d="M 302 93 L 349.734375 93 L 349.734375 282 L 302 282 Z M 302 93 " clip-rule="nonzero"/></clipPath><clipPath id="7749edb3d1"><path d="M 302 93 L 349.734375 93 L 349.734375 134 L 302 134 Z M 302 93 " clip-rule="nonzero"/></clipPath><clipPath id="c5fd1dfe82"><path d="M 25.019531 254 L 349.734375 254 L 349.734375 375 L 25.019531 375 Z M 25.019531 254 " clip-rule="nonzero"/></clipPath><clipPath id="826a252018"><path d="M 302 188.34375 L 349.734375 188.34375 L 349.734375 229 L 302 229 Z M 302 188.34375 " clip-rule="nonzero"/></clipPath><clipPath id="943a75a528"><path d="M 25.019531 162 L 349.734375 162 L 349.734375 283 L 25.019531 283 Z M 25.019531 162 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#31b0b1f54e)"><path fill="#cfcfcf" d="M 25.039062 93.722656 L 71.957031 66.621094 L 118.839844 93.675781 L 187.386719 133.328125 L 302.398438 66.894531 L 349.6875 93.722656 L 187.363281 187.488281 L 71.921875 120.777344 L 25.039062 93.722656 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#07939112ee)"><path fill="#cfcfcf" d="M 255.945312 93.753906 L 302.839844 120.8125 L 349.667969 93.753906 L 349.238281 93.566406 L 302.378906 66.390625 L 187.34375 -0.0117188 L 25.019531 93.765625 L 71.902344 120.8125 L 187.320312 54.148438 L 255.945312 93.753906 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#ea057c28cd)"><path fill="#cfcfcf" d="M 349.742188 280.789062 L 349.6875 93.722656 L 302.859375 120.765625 L 302.804688 253.65625 L 302.792969 254.207031 L 349.6875 281.253906 L 349.742188 280.789062 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#7749edb3d1)"><path fill="#000000" d="M 302.851562 133.417969 L 302.859375 121.0625 L 302.859375 120.765625 L 349.6875 93.722656 L 302.851562 133.417969 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#c5fd1dfe82)"><path fill="#cfcfcf" d="M 118.75 281.261719 L 71.867188 254.207031 L 25.039062 281.261719 L 25.46875 281.4375 L 72.320312 308.628906 L 187.363281 375.027344 L 349.6875 281.253906 L 302.792969 254.207031 L 187.386719 320.871094 L 118.75 281.261719 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#cfcfcf" d="M 25.039062 93.722656 L 25.445312 93.492188 L 72.328125 120.535156 L 71.921875 120.777344 L 71.867188 254.207031 L 25.039062 281.261719 L 25.039062 93.722656 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 71.859375 133.253906 L 25.039062 93.722656 L 71.921875 120.777344 L 71.859375 133.253906 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#826a252018)"><path fill="#000000" d="M 302.851562 228.257812 L 302.859375 215.90625 L 302.859375 215.609375 L 349.6875 188.550781 L 302.851562 228.257812 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#393536" d="M 71.878906 224.0625 L 71.890625 215.585938 L 71.921875 215.621094 L 71.878906 224.0625 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 71.859375 228.09375 L 25.039062 188.5625 L 71.890625 215.585938 L 71.878906 224.0625 L 71.859375 228.09375 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#943a75a528)"><path fill="#cfcfcf" d="M 25.039062 189.199219 L 71.957031 162.097656 L 118.839844 189.15625 L 187.386719 228.808594 L 302.398438 162.375 L 349.6875 189.1875 L 187.363281 282.964844 L 71.921875 216.257812 L 25.039062 189.199219 " fill-opacity="1" fill-rule="nonzero"/></g></svg>'
    div.setAttribute("id", "optiflow");
    // div.style.display = 'flex';
    // div.style.justifyContent = 'center';
    // div.style.alignItems = 'center';

    div.addEventListener('click', function () {
      div.classList.toggle('active');

      const optiflowComponent = document.querySelector('.optiflow-component');
      if (div.classList.contains('active')) {
        if (!optiflowComponent) {
          createOptiflowComponent();
        } else {
          optiflowComponent.style.display = 'block';
        }
      } else {
        if (optiflowComponent) {
          optiflowComponent.style.display = 'none';
        }
      }
    });

    leftSidebarLinks.appendChild(div);
  }
}
// Fonction de création du composant Optiflow
function createOptiflowComponent() {
  const optiflowComponent = document.createElement('div');
  optiflowComponent.classList.add('optiflow-component');

  const optiflowTrim = document.createElement('div');
  optiflowTrim.classList.add('optiflow-trim');

  const optiflowSidebar = document.createElement('div');
  optiflowSidebar.classList.add('optiflow-sidebar');

  const optiflowHeaderContainer = document.createElement('div');

  const optiflowHeader = document.createElement('div');
  optiflowHeader.classList.add('optiflow-header');

  const optiflowDropZone = document.createElement('div');
  optiflowDropZone.classList.add('optiflow-drop');

  const optiflowButton = document.createElement('p');
  optiflowButton.classList.add('optiflow-close');
  optiflowButton.textContent = 'Close';
  optiflowButton.addEventListener('click', function () {
    optiflowComponent.style.display = 'none';
    const optiflowDiv = document.querySelector('.optiflow');
    if (optiflowDiv) {
      optiflowDiv.classList.remove('active');
    }
  });

  const h2 = document.createElement('h2');
  h2.classList.add('optiflow-h2');
  h2.textContent = 'Optiflow';


  const extensions = [
    { id: "finsweet", class: "fs" },
    { id: "flowcheck", class: "button.top" },
    { id: "xflow", class: "xflow" },
    { id: "ms", class: "ms-logo" },
    { id: "potato_wrapper" },
    { id: "sneaps" },
    { id: "relume-sidebar-button" },
    { id: "vds" },
    { id: "flowbase" },
    { id: "GridUpBtn" },
    { id: "seoIcon" }
  ];


  const section1 = createSection('Library', 'rgb(77, 77, 77)');
  const section2 = createSection('Utils', 'rgb(77, 77, 77)');
  const section3 = createSection('SEO', 'rgb(77, 77, 77)');

  optiflowDropZone.appendChild(section1);
  optiflowDropZone.appendChild(section2);
  optiflowDropZone.appendChild(section3);

  optiflowHeader.appendChild(h2);
  optiflowHeader.appendChild(optiflowButton);
  optiflowHeaderContainer.appendChild(optiflowHeader); // Ajoute le header à la nouvelle div

  optiflowSidebar.appendChild(optiflowHeaderContainer); // Ajoute la nouvelle div (contenant le header) au sidebar
  optiflowSidebar.appendChild(optiflowDropZone);
  optiflowComponent.append(optiflowTrim, optiflowSidebar);
  document.body.appendChild(optiflowComponent);

  // Création des sections supplémentaires
  function createSection(headerText, backgroundColor) {
    const section = document.createElement('div');
    section.classList.add('sections');

    const header = document.createElement('div');
    header.style.border = '0.8px solid black';
    header.style.backgroundColor = backgroundColor;
    header.style.position = 'absolute';
    header.style.top = '0';
    header.style.width = '100%';

    const h3 = document.createElement('h3');
    h3.textContent = headerText;
    h3.style.color = 'white';

    header.appendChild(h3);
    section.appendChild(header);

    return section;
  }

  function setMinimumSize(div) {
    div.style.width = '2.5rem';
    div.style.height = '2.5rem';
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
  }

  // Déplace les extensions dans les sections appropriées
  for (const extension of extensions) {
    const el = document.getElementById(extension.id) || document.getElementsByClassName(extension.class)[0];
    if (el) {
      if ( extension.id === 'relume-sidebar-button' || extension.id === 'flowbase' || extension.id === 'vds') {
        section1.appendChild(el);
        setMinimumSize(el); // Applique la taille minimale à la div
      } else if (extension.id === 'sneaps' || extension.id === 'seoIcon' || extension.id === 'xflow') {
        section3.appendChild(el);
        setMinimumSize(el); // Applique la taille minimale à la div
      } else {
        section2.appendChild(el);
        setMinimumSize(el); // Applique la taille minimale à la div
      }
    }
  }
}


// Fonction pour observer les modifications de la classe ".left-sidebar-links"
function observeLeftSidebarLinks() {
  const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Vérifier si la classe ".left-sidebar-links" est ajoutée ou modifiée
        const leftSidebarLinks = document.querySelector('.left-sidebar-links');
        if (leftSidebarLinks) {
          addOptiflowDiv();
          // Arrêter l'observation une fois que la div est ajoutée
          observer.disconnect();
          break;
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Appel de la fonction pour observer les modifications de la classe ".left-sidebar-links"
observeLeftSidebarLinks();
