// import './optiflow.css';

console.log('Optiflow est activé sur Webflow !');

// Fonction d'ajout de la div à la classe ".left-sidebar-links"
function addOptiflowDiv() {
  const leftSidebarLinks = document.querySelector('.left-sidebar-links');

  if (leftSidebarLinks) {
    const div = document.createElement('div');
    div.classList.add('button', 'top', 'optiflow');

    const optiflowComponent = document.querySelector('.optiflow-component');
    if (optiflowComponent && optiflowComponent.style.display !== 'none') {
      div.classList.add('active');
    }

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

    // Création de l'élément image
    const img = document.createElement('img');
    img.src = 'img';
    img.classList.add('bem-Svg');
    img.style.display = 'block';
    img.style.position = 'relative';
    img.style.left = '1px';

    // Ajout de l'élément image à la div
    div.appendChild(img);

    leftSidebarLinks.appendChild(div);

    // Rendre l'élément draggable
    makeElementDraggable(div);
  }
}

// Fonction de création du composant Optiflow
function createOptiflowComponent() {
  const optiflowComponent = document.createElement('div');
  optiflowComponent.classList.add('optiflow-component');
  optiflowComponent.style.position = 'absolute';
  optiflowComponent.style.zIndex = '9999';
  optiflowComponent.style.width = '20rem';
  optiflowComponent.style.display = 'none';
  optiflowComponent.style.backgroundColor = 'rgb(64, 64, 64)';
  optiflowComponent.style.color = 'rgb(217, 217, 217)';
  optiflowComponent.style.fontSize = '0.75rem';
  optiflowComponent.style.lineHeight = '1.33333';
  optiflowComponent.style.inset = '34px auto 0px 35px';
  optiflowComponent.style.borderTop = '0.0625rem solid rgb(26, 26, 26)';
  optiflowComponent.style.borderRight = '0.0625rem solid rgb(26, 26, 26)';
  optiflowComponent.style.borderBottom = '0.0625rem solid rgb(26, 26, 26)';

  const optiflowTrim = document.createElement('div');
  optiflowTrim.classList.add('optiflow-trim');
  optiflowTrim.style.background = 'var(--wf-designer--panelColorLight)';
  optiflowTrim.style.borderRight = '1px solid var(--wf-designer--borderColorDark)';
  optiflowTrim.style.bottom = '0';
  optiflowTrim.style.content = "''";
  optiflowTrim.style.display = 'block';
  optiflowTrim.style.left = '0';
  optiflowTrim.style.position = 'absolute';
  optiflowTrim.style.top = '1px';
  optiflowTrim.style.width = '6px';
  optiflowTrim.style.pointerEvents = 'auto';

  const optiflowSidebar = document.createElement('div');
  optiflowSidebar.classList.add('optiflow-sidebar');
  optiflowSidebar.style.display = 'flex';
  optiflowSidebar.style.width = '100%';
  optiflowSidebar.style.flexDirection = 'column';
  optiflowSidebar.style.borderLeft = '0.0625rem solid rgb(26, 26, 26)';

  const optiflowHeader = document.createElement('div');
  optiflowHeader.classList.add('optiflow-header');
  optiflowHeader.style.display = 'flex';
  optiflowHeader.style.minHeight = '2.875rem';
  optiflowHeader.style.paddingRight = '0.625rem';
  optiflowHeader.style.paddingLeft = '0.625rem';
  optiflowHeader.style.justifyContent = 'space-between';
  optiflowHeader.style.alignItems = 'center';
  optiflowHeader.style.backgroundColor = 'rgb(77, 77, 77)';
  optiflowHeader.style.borderBottom = '0.0625rem solid rgb(26, 26, 26)';

  const h2 = document.createElement('h2');
  h2.classList.add('optiflow-h2');
  h2.textContent = 'OptiFlow';
  h2.style.marginTop = '0px';
  h2.style.marginBottom = '0px';
  h2.style.fontSize = '1.25rem';
  h2.style.lineHeight = '1.2';
  h2.style.fontWeight = '400';

  const optiflowButton = document.createElement('p');
  optiflowButton.classList.add('optiflow-close');
  optiflowButton.textContent = 'Close';
  optiflowButton.style.fontSize = '0.8rem';
  optiflowButton.style.cursor = 'pointer';
  // Ajout de l'événement au clic sur le bouton
  optiflowButton.addEventListener('click', function() {
    optiflowComponent.style.display = 'none';
    const optiflowDiv = document.querySelector('.optiflow');
    if (optiflowDiv) {
      optiflowDiv.classList.remove('active');
    }
  });

  optiflowHeader.appendChild(h2);
  optiflowHeader.appendChild(optiflowButton);
  optiflowSidebar.appendChild(optiflowHeader);
  optiflowComponent.appendChild(optiflowTrim);
  optiflowComponent.appendChild(optiflowSidebar);

  document.body.appendChild(optiflowComponent);
}

// Fonction pour rendre un élément draggable
function makeElementDraggable(element) {
  element.draggable = true;

  element.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('text/plain', ''); // Vous pouvez ajouter des données personnalisées ici
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setDragImage(this, 0, 0);
  });
}

// Fonction pour autoriser le drop uniquement dans l'optiflowComponent
function allowDrop(event) {
  const optiflowComponent = document.querySelector('.optiflow-component');
  if (optiflowComponent && event.target === optiflowComponent) {
    event.preventDefault();
  }
}

function makeElementsDragAndDroppable() {
  const elements = document.querySelectorAll('.button.top');
  const leftSidebarLinks = document.querySelector('.left-sidebar-links');
  const optiflowComponent = document.querySelector('.optiflow-component');

  if (elements && leftSidebarLinks && optiflowComponent) {
    elements.forEach(function (element) {
      element.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', element.textContent);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setDragImage(element, 0, 0);
      });
    });

    leftSidebarLinks.addEventListener('dragover', function (event) {
      event.preventDefault();
      leftSidebarLinks.classList.add('drag-over');
    });

    leftSidebarLinks.addEventListener('dragleave', function () {
      leftSidebarLinks.classList.remove('drag-over');
    });

    leftSidebarLinks.addEventListener('drop', function (event) {
      event.preventDefault();
      leftSidebarLinks.classList.remove('drag-over');
      const data = event.dataTransfer.getData('text/plain');
      console.log('Élément déposé :', data);
    });
  }
}



// Fonction pour observer les modifications de la classe ".left-sidebar-links"
function observeLeftSidebarLinks() {
  const observer = new MutationObserver(function(mutationsList) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Vérifier si la classe ".left-sidebar-links" est ajoutée ou modifiée
        const leftSidebarLinks = document.querySelector('.left-sidebar-links');
        if (leftSidebarLinks) {
          addOptiflowDiv();
          makeElementsDragAndDroppable(); // Rendre les éléments drag and droppable
          // Arrêter l'observation une fois que la div est ajoutée
          observer.disconnect();
          break;
        }
      }
    }
  });

  // Observer les modifications dans le corps de la page
  observer.observe(document.body, { childList: true, subtree: true });

  // Vérifier immédiatement si la classe ".left-sidebar-links" est déjà présente
  addOptiflowDiv();
  makeElementsDragAndDroppable();
}

observeLeftSidebarLinks();
