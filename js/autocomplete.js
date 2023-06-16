fetch('autocompleteData.json')
      .then(response => response.json())
      .then(data => {
        const autocompleteData = data.map(item => item.name); // Extracting 'name' property as autocomplete data

        const inputElement = document.getElementById('myInput'); // Replace 'myInput' with your input element ID
        const autocompleteItems = document.getElementById('autocompleteItems'); // Replace 'autocompleteItems' with the ID of the autocomplete items container

        new Autocomplete(inputElement, {
          data: autocompleteData,
          onSelect: function(item) {
            // Perform action when an item is selected
            console.log('Selected item:', item);
          },
          renderOption: function(item, currentValue) {
            // Customize the rendering of each autocomplete item
            const regex = new RegExp(currentValue, 'gi');
            const highlightedValue = item.replace(regex, "<strong>$&</strong>");
            return `<div class="autocomplete-item">${highlightedValue}</div>`;
          },
          container: autocompleteItems // Specify the container to render the autocomplete items
        });
      })
      .catch(error => console.error('Error loading JSON file:', error));
