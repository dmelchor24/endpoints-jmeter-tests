/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 129.0, "minX": 0.0, "maxY": 1434.0, "series": [{"data": [[0.0, 129.0], [0.1, 131.0], [0.2, 131.0], [0.3, 132.0], [0.4, 132.0], [0.5, 132.0], [0.6, 133.0], [0.7, 134.0], [0.8, 134.0], [0.9, 134.0], [1.0, 134.0], [1.1, 135.0], [1.2, 135.0], [1.3, 135.0], [1.4, 135.0], [1.5, 136.0], [1.6, 136.0], [1.7, 136.0], [1.8, 136.0], [1.9, 136.0], [2.0, 136.0], [2.1, 136.0], [2.2, 136.0], [2.3, 137.0], [2.4, 137.0], [2.5, 137.0], [2.6, 137.0], [2.7, 137.0], [2.8, 137.0], [2.9, 137.0], [3.0, 137.0], [3.1, 137.0], [3.2, 137.0], [3.3, 137.0], [3.4, 137.0], [3.5, 137.0], [3.6, 137.0], [3.7, 138.0], [3.8, 138.0], [3.9, 138.0], [4.0, 138.0], [4.1, 138.0], [4.2, 138.0], [4.3, 138.0], [4.4, 138.0], [4.5, 138.0], [4.6, 138.0], [4.7, 138.0], [4.8, 138.0], [4.9, 138.0], [5.0, 138.0], [5.1, 138.0], [5.2, 139.0], [5.3, 139.0], [5.4, 139.0], [5.5, 139.0], [5.6, 139.0], [5.7, 139.0], [5.8, 139.0], [5.9, 139.0], [6.0, 139.0], [6.1, 139.0], [6.2, 139.0], [6.3, 139.0], [6.4, 139.0], [6.5, 139.0], [6.6, 139.0], [6.7, 139.0], [6.8, 139.0], [6.9, 139.0], [7.0, 139.0], [7.1, 139.0], [7.2, 139.0], [7.3, 139.0], [7.4, 140.0], [7.5, 140.0], [7.6, 140.0], [7.7, 140.0], [7.8, 140.0], [7.9, 140.0], [8.0, 140.0], [8.1, 140.0], [8.2, 140.0], [8.3, 140.0], [8.4, 140.0], [8.5, 140.0], [8.6, 140.0], [8.7, 140.0], [8.8, 140.0], [8.9, 140.0], [9.0, 140.0], [9.1, 140.0], [9.2, 140.0], [9.3, 140.0], [9.4, 141.0], [9.5, 141.0], [9.6, 141.0], [9.7, 141.0], [9.8, 141.0], [9.9, 141.0], [10.0, 141.0], [10.1, 141.0], [10.2, 141.0], [10.3, 141.0], [10.4, 141.0], [10.5, 141.0], [10.6, 141.0], [10.7, 141.0], [10.8, 141.0], [10.9, 141.0], [11.0, 141.0], [11.1, 141.0], [11.2, 141.0], [11.3, 141.0], [11.4, 141.0], [11.5, 141.0], [11.6, 141.0], [11.7, 141.0], [11.8, 142.0], [11.9, 142.0], [12.0, 142.0], [12.1, 142.0], [12.2, 142.0], [12.3, 142.0], [12.4, 142.0], [12.5, 142.0], [12.6, 142.0], [12.7, 142.0], [12.8, 142.0], [12.9, 142.0], [13.0, 142.0], [13.1, 142.0], [13.2, 142.0], [13.3, 142.0], [13.4, 142.0], [13.5, 142.0], [13.6, 142.0], [13.7, 142.0], [13.8, 142.0], [13.9, 142.0], [14.0, 142.0], [14.1, 142.0], [14.2, 143.0], [14.3, 143.0], [14.4, 143.0], [14.5, 143.0], [14.6, 143.0], [14.7, 143.0], [14.8, 143.0], [14.9, 143.0], [15.0, 143.0], [15.1, 143.0], [15.2, 143.0], [15.3, 143.0], [15.4, 143.0], [15.5, 143.0], [15.6, 143.0], [15.7, 143.0], [15.8, 143.0], [15.9, 143.0], [16.0, 143.0], [16.1, 143.0], [16.2, 143.0], [16.3, 144.0], [16.4, 144.0], [16.5, 144.0], [16.6, 144.0], [16.7, 144.0], [16.8, 144.0], [16.9, 144.0], [17.0, 144.0], [17.1, 144.0], [17.2, 144.0], [17.3, 144.0], [17.4, 144.0], [17.5, 144.0], [17.6, 144.0], [17.7, 144.0], [17.8, 144.0], [17.9, 144.0], [18.0, 144.0], [18.1, 144.0], [18.2, 144.0], [18.3, 144.0], [18.4, 144.0], [18.5, 144.0], [18.6, 145.0], [18.7, 145.0], [18.8, 145.0], [18.9, 145.0], [19.0, 145.0], [19.1, 145.0], [19.2, 145.0], [19.3, 145.0], [19.4, 145.0], [19.5, 145.0], [19.6, 145.0], [19.7, 145.0], [19.8, 145.0], [19.9, 145.0], [20.0, 145.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 145.0], [20.7, 145.0], [20.8, 145.0], [20.9, 145.0], [21.0, 145.0], [21.1, 145.0], [21.2, 145.0], [21.3, 145.0], [21.4, 145.0], [21.5, 146.0], [21.6, 146.0], [21.7, 146.0], [21.8, 146.0], [21.9, 146.0], [22.0, 146.0], [22.1, 146.0], [22.2, 146.0], [22.3, 146.0], [22.4, 146.0], [22.5, 146.0], [22.6, 146.0], [22.7, 146.0], [22.8, 146.0], [22.9, 146.0], [23.0, 146.0], [23.1, 146.0], [23.2, 146.0], [23.3, 146.0], [23.4, 146.0], [23.5, 146.0], [23.6, 146.0], [23.7, 146.0], [23.8, 146.0], [23.9, 146.0], [24.0, 146.0], [24.1, 147.0], [24.2, 147.0], [24.3, 147.0], [24.4, 147.0], [24.5, 147.0], [24.6, 147.0], [24.7, 147.0], [24.8, 147.0], [24.9, 147.0], [25.0, 147.0], [25.1, 147.0], [25.2, 147.0], [25.3, 147.0], [25.4, 147.0], [25.5, 147.0], [25.6, 147.0], [25.7, 147.0], [25.8, 147.0], [25.9, 147.0], [26.0, 147.0], [26.1, 147.0], [26.2, 147.0], [26.3, 147.0], [26.4, 147.0], [26.5, 147.0], [26.6, 147.0], [26.7, 148.0], [26.8, 148.0], [26.9, 148.0], [27.0, 148.0], [27.1, 148.0], [27.2, 148.0], [27.3, 148.0], [27.4, 148.0], [27.5, 148.0], [27.6, 148.0], [27.7, 148.0], [27.8, 148.0], [27.9, 148.0], [28.0, 148.0], [28.1, 148.0], [28.2, 148.0], [28.3, 148.0], [28.4, 148.0], [28.5, 148.0], [28.6, 148.0], [28.7, 148.0], [28.8, 148.0], [28.9, 148.0], [29.0, 148.0], [29.1, 148.0], [29.2, 148.0], [29.3, 148.0], [29.4, 148.0], [29.5, 148.0], [29.6, 148.0], [29.7, 149.0], [29.8, 149.0], [29.9, 149.0], [30.0, 149.0], [30.1, 149.0], [30.2, 149.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 149.0], [30.9, 149.0], [31.0, 149.0], [31.1, 149.0], [31.2, 149.0], [31.3, 149.0], [31.4, 149.0], [31.5, 149.0], [31.6, 149.0], [31.7, 149.0], [31.8, 149.0], [31.9, 149.0], [32.0, 150.0], [32.1, 150.0], [32.2, 150.0], [32.3, 150.0], [32.4, 150.0], [32.5, 150.0], [32.6, 150.0], [32.7, 150.0], [32.8, 150.0], [32.9, 150.0], [33.0, 150.0], [33.1, 150.0], [33.2, 150.0], [33.3, 150.0], [33.4, 150.0], [33.5, 150.0], [33.6, 150.0], [33.7, 150.0], [33.8, 150.0], [33.9, 150.0], [34.0, 150.0], [34.1, 151.0], [34.2, 151.0], [34.3, 151.0], [34.4, 151.0], [34.5, 151.0], [34.6, 151.0], [34.7, 151.0], [34.8, 151.0], [34.9, 151.0], [35.0, 151.0], [35.1, 151.0], [35.2, 151.0], [35.3, 151.0], [35.4, 151.0], [35.5, 151.0], [35.6, 151.0], [35.7, 151.0], [35.8, 151.0], [35.9, 151.0], [36.0, 151.0], [36.1, 151.0], [36.2, 151.0], [36.3, 151.0], [36.4, 151.0], [36.5, 151.0], [36.6, 151.0], [36.7, 152.0], [36.8, 152.0], [36.9, 152.0], [37.0, 152.0], [37.1, 152.0], [37.2, 152.0], [37.3, 152.0], [37.4, 152.0], [37.5, 152.0], [37.6, 152.0], [37.7, 152.0], [37.8, 152.0], [37.9, 152.0], [38.0, 152.0], [38.1, 152.0], [38.2, 152.0], [38.3, 152.0], [38.4, 152.0], [38.5, 152.0], [38.6, 152.0], [38.7, 152.0], [38.8, 152.0], [38.9, 152.0], [39.0, 152.0], [39.1, 152.0], [39.2, 152.0], [39.3, 153.0], [39.4, 153.0], [39.5, 153.0], [39.6, 153.0], [39.7, 153.0], [39.8, 153.0], [39.9, 153.0], [40.0, 153.0], [40.1, 153.0], [40.2, 153.0], [40.3, 153.0], [40.4, 153.0], [40.5, 153.0], [40.6, 153.0], [40.7, 153.0], [40.8, 153.0], [40.9, 153.0], [41.0, 153.0], [41.1, 153.0], [41.2, 153.0], [41.3, 154.0], [41.4, 154.0], [41.5, 154.0], [41.6, 154.0], [41.7, 154.0], [41.8, 154.0], [41.9, 154.0], [42.0, 154.0], [42.1, 154.0], [42.2, 154.0], [42.3, 154.0], [42.4, 154.0], [42.5, 154.0], [42.6, 154.0], [42.7, 154.0], [42.8, 154.0], [42.9, 154.0], [43.0, 154.0], [43.1, 154.0], [43.2, 154.0], [43.3, 154.0], [43.4, 154.0], [43.5, 154.0], [43.6, 155.0], [43.7, 155.0], [43.8, 155.0], [43.9, 155.0], [44.0, 155.0], [44.1, 155.0], [44.2, 155.0], [44.3, 155.0], [44.4, 155.0], [44.5, 155.0], [44.6, 155.0], [44.7, 155.0], [44.8, 155.0], [44.9, 155.0], [45.0, 155.0], [45.1, 155.0], [45.2, 155.0], [45.3, 155.0], [45.4, 156.0], [45.5, 156.0], [45.6, 156.0], [45.7, 156.0], [45.8, 156.0], [45.9, 156.0], [46.0, 156.0], [46.1, 156.0], [46.2, 156.0], [46.3, 156.0], [46.4, 156.0], [46.5, 156.0], [46.6, 156.0], [46.7, 156.0], [46.8, 156.0], [46.9, 156.0], [47.0, 156.0], [47.1, 156.0], [47.2, 156.0], [47.3, 156.0], [47.4, 156.0], [47.5, 157.0], [47.6, 157.0], [47.7, 157.0], [47.8, 157.0], [47.9, 157.0], [48.0, 157.0], [48.1, 157.0], [48.2, 157.0], [48.3, 157.0], [48.4, 157.0], [48.5, 157.0], [48.6, 157.0], [48.7, 157.0], [48.8, 157.0], [48.9, 157.0], [49.0, 157.0], [49.1, 157.0], [49.2, 158.0], [49.3, 158.0], [49.4, 158.0], [49.5, 158.0], [49.6, 158.0], [49.7, 158.0], [49.8, 158.0], [49.9, 158.0], [50.0, 158.0], [50.1, 158.0], [50.2, 158.0], [50.3, 158.0], [50.4, 158.0], [50.5, 158.0], [50.6, 158.0], [50.7, 158.0], [50.8, 158.0], [50.9, 158.0], [51.0, 158.0], [51.1, 158.0], [51.2, 158.0], [51.3, 158.0], [51.4, 158.0], [51.5, 159.0], [51.6, 159.0], [51.7, 159.0], [51.8, 159.0], [51.9, 159.0], [52.0, 159.0], [52.1, 159.0], [52.2, 159.0], [52.3, 159.0], [52.4, 159.0], [52.5, 159.0], [52.6, 159.0], [52.7, 159.0], [52.8, 159.0], [52.9, 159.0], [53.0, 159.0], [53.1, 159.0], [53.2, 160.0], [53.3, 160.0], [53.4, 160.0], [53.5, 160.0], [53.6, 160.0], [53.7, 160.0], [53.8, 160.0], [53.9, 160.0], [54.0, 160.0], [54.1, 160.0], [54.2, 160.0], [54.3, 160.0], [54.4, 160.0], [54.5, 160.0], [54.6, 160.0], [54.7, 160.0], [54.8, 161.0], [54.9, 161.0], [55.0, 161.0], [55.1, 161.0], [55.2, 161.0], [55.3, 161.0], [55.4, 161.0], [55.5, 161.0], [55.6, 161.0], [55.7, 161.0], [55.8, 161.0], [55.9, 161.0], [56.0, 161.0], [56.1, 161.0], [56.2, 161.0], [56.3, 161.0], [56.4, 161.0], [56.5, 162.0], [56.6, 162.0], [56.7, 162.0], [56.8, 162.0], [56.9, 162.0], [57.0, 162.0], [57.1, 162.0], [57.2, 162.0], [57.3, 162.0], [57.4, 162.0], [57.5, 162.0], [57.6, 162.0], [57.7, 162.0], [57.8, 162.0], [57.9, 162.0], [58.0, 163.0], [58.1, 163.0], [58.2, 163.0], [58.3, 163.0], [58.4, 163.0], [58.5, 163.0], [58.6, 163.0], [58.7, 163.0], [58.8, 163.0], [58.9, 163.0], [59.0, 163.0], [59.1, 164.0], [59.2, 164.0], [59.3, 164.0], [59.4, 164.0], [59.5, 164.0], [59.6, 164.0], [59.7, 164.0], [59.8, 164.0], [59.9, 164.0], [60.0, 164.0], [60.1, 164.0], [60.2, 164.0], [60.3, 164.0], [60.4, 164.0], [60.5, 164.0], [60.6, 165.0], [60.7, 165.0], [60.8, 165.0], [60.9, 165.0], [61.0, 165.0], [61.1, 165.0], [61.2, 165.0], [61.3, 165.0], [61.4, 165.0], [61.5, 165.0], [61.6, 165.0], [61.7, 165.0], [61.8, 165.0], [61.9, 165.0], [62.0, 165.0], [62.1, 166.0], [62.2, 166.0], [62.3, 166.0], [62.4, 166.0], [62.5, 166.0], [62.6, 166.0], [62.7, 166.0], [62.8, 166.0], [62.9, 166.0], [63.0, 166.0], [63.1, 167.0], [63.2, 167.0], [63.3, 167.0], [63.4, 167.0], [63.5, 167.0], [63.6, 167.0], [63.7, 167.0], [63.8, 167.0], [63.9, 167.0], [64.0, 167.0], [64.1, 167.0], [64.2, 168.0], [64.3, 168.0], [64.4, 168.0], [64.5, 168.0], [64.6, 168.0], [64.7, 168.0], [64.8, 168.0], [64.9, 168.0], [65.0, 168.0], [65.1, 168.0], [65.2, 169.0], [65.3, 169.0], [65.4, 169.0], [65.5, 169.0], [65.6, 169.0], [65.7, 169.0], [65.8, 169.0], [65.9, 169.0], [66.0, 169.0], [66.1, 170.0], [66.2, 170.0], [66.3, 170.0], [66.4, 170.0], [66.5, 170.0], [66.6, 170.0], [66.7, 170.0], [66.8, 170.0], [66.9, 170.0], [67.0, 170.0], [67.1, 170.0], [67.2, 171.0], [67.3, 171.0], [67.4, 171.0], [67.5, 171.0], [67.6, 171.0], [67.7, 171.0], [67.8, 171.0], [67.9, 172.0], [68.0, 172.0], [68.1, 172.0], [68.2, 172.0], [68.3, 172.0], [68.4, 172.0], [68.5, 173.0], [68.6, 173.0], [68.7, 173.0], [68.8, 173.0], [68.9, 173.0], [69.0, 173.0], [69.1, 173.0], [69.2, 173.0], [69.3, 174.0], [69.4, 174.0], [69.5, 174.0], [69.6, 174.0], [69.7, 174.0], [69.8, 174.0], [69.9, 174.0], [70.0, 174.0], [70.1, 175.0], [70.2, 175.0], [70.3, 175.0], [70.4, 175.0], [70.5, 175.0], [70.6, 175.0], [70.7, 176.0], [70.8, 176.0], [70.9, 176.0], [71.0, 176.0], [71.1, 176.0], [71.2, 176.0], [71.3, 177.0], [71.4, 177.0], [71.5, 177.0], [71.6, 177.0], [71.7, 177.0], [71.8, 177.0], [71.9, 177.0], [72.0, 178.0], [72.1, 178.0], [72.2, 178.0], [72.3, 178.0], [72.4, 178.0], [72.5, 179.0], [72.6, 179.0], [72.7, 179.0], [72.8, 179.0], [72.9, 179.0], [73.0, 179.0], [73.1, 179.0], [73.2, 179.0], [73.3, 180.0], [73.4, 180.0], [73.5, 180.0], [73.6, 180.0], [73.7, 181.0], [73.8, 181.0], [73.9, 181.0], [74.0, 181.0], [74.1, 181.0], [74.2, 181.0], [74.3, 181.0], [74.4, 182.0], [74.5, 182.0], [74.6, 182.0], [74.7, 183.0], [74.8, 183.0], [74.9, 183.0], [75.0, 183.0], [75.1, 183.0], [75.2, 184.0], [75.3, 184.0], [75.4, 184.0], [75.5, 185.0], [75.6, 185.0], [75.7, 185.0], [75.8, 185.0], [75.9, 185.0], [76.0, 185.0], [76.1, 185.0], [76.2, 186.0], [76.3, 186.0], [76.4, 186.0], [76.5, 186.0], [76.6, 186.0], [76.7, 187.0], [76.8, 188.0], [76.9, 188.0], [77.0, 188.0], [77.1, 188.0], [77.2, 188.0], [77.3, 189.0], [77.4, 189.0], [77.5, 189.0], [77.6, 190.0], [77.7, 190.0], [77.8, 191.0], [77.9, 191.0], [78.0, 191.0], [78.1, 191.0], [78.2, 191.0], [78.3, 192.0], [78.4, 192.0], [78.5, 193.0], [78.6, 193.0], [78.7, 194.0], [78.8, 194.0], [78.9, 195.0], [79.0, 195.0], [79.1, 196.0], [79.2, 196.0], [79.3, 196.0], [79.4, 196.0], [79.5, 197.0], [79.6, 197.0], [79.7, 197.0], [79.8, 198.0], [79.9, 198.0], [80.0, 198.0], [80.1, 198.0], [80.2, 198.0], [80.3, 199.0], [80.4, 199.0], [80.5, 199.0], [80.6, 199.0], [80.7, 200.0], [80.8, 200.0], [80.9, 200.0], [81.0, 201.0], [81.1, 201.0], [81.2, 201.0], [81.3, 202.0], [81.4, 202.0], [81.5, 203.0], [81.6, 203.0], [81.7, 204.0], [81.8, 204.0], [81.9, 204.0], [82.0, 205.0], [82.1, 205.0], [82.2, 205.0], [82.3, 205.0], [82.4, 206.0], [82.5, 206.0], [82.6, 206.0], [82.7, 207.0], [82.8, 207.0], [82.9, 208.0], [83.0, 208.0], [83.1, 209.0], [83.2, 209.0], [83.3, 209.0], [83.4, 210.0], [83.5, 210.0], [83.6, 210.0], [83.7, 211.0], [83.8, 211.0], [83.9, 211.0], [84.0, 212.0], [84.1, 212.0], [84.2, 213.0], [84.3, 213.0], [84.4, 213.0], [84.5, 213.0], [84.6, 214.0], [84.7, 214.0], [84.8, 215.0], [84.9, 215.0], [85.0, 216.0], [85.1, 216.0], [85.2, 217.0], [85.3, 217.0], [85.4, 218.0], [85.5, 218.0], [85.6, 218.0], [85.7, 218.0], [85.8, 219.0], [85.9, 219.0], [86.0, 220.0], [86.1, 220.0], [86.2, 221.0], [86.3, 222.0], [86.4, 222.0], [86.5, 222.0], [86.6, 222.0], [86.7, 223.0], [86.8, 224.0], [86.9, 225.0], [87.0, 225.0], [87.1, 226.0], [87.2, 227.0], [87.3, 227.0], [87.4, 227.0], [87.5, 228.0], [87.6, 229.0], [87.7, 229.0], [87.8, 230.0], [87.9, 232.0], [88.0, 232.0], [88.1, 233.0], [88.2, 235.0], [88.3, 236.0], [88.4, 237.0], [88.5, 238.0], [88.6, 239.0], [88.7, 240.0], [88.8, 240.0], [88.9, 242.0], [89.0, 242.0], [89.1, 243.0], [89.2, 244.0], [89.3, 245.0], [89.4, 246.0], [89.5, 247.0], [89.6, 248.0], [89.7, 249.0], [89.8, 251.0], [89.9, 252.0], [90.0, 253.0], [90.1, 253.0], [90.2, 254.0], [90.3, 256.0], [90.4, 257.0], [90.5, 260.0], [90.6, 260.0], [90.7, 263.0], [90.8, 264.0], [90.9, 265.0], [91.0, 266.0], [91.1, 267.0], [91.2, 268.0], [91.3, 268.0], [91.4, 269.0], [91.5, 270.0], [91.6, 272.0], [91.7, 273.0], [91.8, 274.0], [91.9, 275.0], [92.0, 276.0], [92.1, 277.0], [92.2, 279.0], [92.3, 280.0], [92.4, 281.0], [92.5, 281.0], [92.6, 283.0], [92.7, 284.0], [92.8, 285.0], [92.9, 285.0], [93.0, 286.0], [93.1, 287.0], [93.2, 289.0], [93.3, 290.0], [93.4, 293.0], [93.5, 297.0], [93.6, 298.0], [93.7, 301.0], [93.8, 303.0], [93.9, 304.0], [94.0, 307.0], [94.1, 307.0], [94.2, 309.0], [94.3, 311.0], [94.4, 312.0], [94.5, 313.0], [94.6, 314.0], [94.7, 317.0], [94.8, 319.0], [94.9, 320.0], [95.0, 324.0], [95.1, 326.0], [95.2, 328.0], [95.3, 329.0], [95.4, 331.0], [95.5, 336.0], [95.6, 338.0], [95.7, 342.0], [95.8, 344.0], [95.9, 347.0], [96.0, 348.0], [96.1, 352.0], [96.2, 360.0], [96.3, 371.0], [96.4, 379.0], [96.5, 386.0], [96.6, 393.0], [96.7, 399.0], [96.8, 400.0], [96.9, 407.0], [97.0, 410.0], [97.1, 413.0], [97.2, 418.0], [97.3, 425.0], [97.4, 440.0], [97.5, 451.0], [97.6, 461.0], [97.7, 468.0], [97.8, 476.0], [97.9, 482.0], [98.0, 507.0], [98.1, 542.0], [98.2, 603.0], [98.3, 616.0], [98.4, 617.0], [98.5, 673.0], [98.6, 698.0], [98.7, 750.0], [98.8, 762.0], [98.9, 783.0], [99.0, 872.0], [99.1, 915.0], [99.2, 945.0], [99.3, 971.0], [99.4, 990.0], [99.5, 1053.0], [99.6, 1173.0], [99.7, 1252.0], [99.8, 1314.0], [99.9, 1341.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2573.0, "series": [{"data": [[600.0, 14.0], [700.0, 10.0], [200.0, 414.0], [800.0, 3.0], [900.0, 12.0], [1000.0, 6.0], [1100.0, 2.0], [300.0, 98.0], [1200.0, 3.0], [1300.0, 7.0], [1400.0, 1.0], [100.0, 2573.0], [400.0, 38.0], [500.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 66.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3123.0, "series": [{"data": [[0.0, 3123.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 66.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.004926108374385, "minX": 1.77170442E12, "maxY": 19.680134680134675, "series": [{"data": [[1.77170454E12, 19.65836791147994], [1.77170448E12, 12.909090909090907], [1.7717046E12, 19.680134680134675], [1.77170442E12, 5.004926108374385]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717046E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 139.0, "minX": 1.0, "maxY": 223.10344827586206, "series": [{"data": [[2.0, 223.10344827586206], [8.0, 157.95238095238093], [9.0, 151.0], [10.0, 159.99382716049388], [11.0, 156.0], [12.0, 163.59473684210536], [3.0, 163.0], [13.0, 139.0], [14.0, 165.7264150943396], [15.0, 177.0], [4.0, 161.0], [16.0, 189.643153526971], [1.0, 161.0], [17.0, 169.0], [18.0, 163.3811188811189], [19.0, 156.0], [20.0, 207.7891770011273], [5.0, 141.0], [6.0, 161.07368421052624], [7.0, 152.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.727500783944798, 190.25650674192576]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 909.9, "minX": 1.77170442E12, "maxY": 11950.033333333333, "series": [{"data": [[1.77170454E12, 11950.033333333333], [1.77170448E12, 7803.583333333333], [1.7717046E12, 4906.833333333333], [1.77170442E12, 1669.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77170454E12, 6503.433333333333], [1.77170448E12, 4253.433333333333], [1.7717046E12, 2669.4333333333334], [1.77170442E12, 909.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717046E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 169.07399577167007, "minX": 1.77170442E12, "maxY": 212.47648686030408, "series": [{"data": [[1.77170454E12, 212.47648686030408], [1.77170448E12, 169.07399577167007], [1.7717046E12, 176.82491582491593], [1.77170442E12, 169.99507389162565]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717046E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 169.03594080338272, "minX": 1.77170442E12, "maxY": 212.42738589211598, "series": [{"data": [[1.77170454E12, 212.42738589211598], [1.77170448E12, 169.03594080338272], [1.7717046E12, 176.76599326599325], [1.77170442E12, 169.9064039408867]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717046E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 40.39898989898993, "minX": 1.77170442E12, "maxY": 45.26600985221676, "series": [{"data": [[1.77170454E12, 40.58644536652839], [1.77170448E12, 41.060253699788575], [1.7717046E12, 40.39898989898993], [1.77170442E12, 45.26600985221676]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717046E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 129.0, "minX": 1.77170442E12, "maxY": 1434.0, "series": [{"data": [[1.77170454E12, 1434.0], [1.77170448E12, 822.0], [1.7717046E12, 872.0], [1.77170442E12, 615.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77170454E12, 310.5999999999999], [1.77170448E12, 202.9000000000002], [1.7717046E12, 217.5], [1.77170442E12, 182.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77170454E12, 1081.2399999999998], [1.77170448E12, 392.88999999999965], [1.7717046E12, 613.1499999999971], [1.77170442E12, 533.7600000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77170454E12, 420.59999999999945], [1.77170448E12, 261.94999999999993], [1.7717046E12, 255.75], [1.77170442E12, 256.7999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77170454E12, 129.0], [1.77170448E12, 131.0], [1.7717046E12, 133.0], [1.77170442E12, 138.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77170454E12, 160.0], [1.77170448E12, 155.0], [1.7717046E12, 159.0], [1.77170442E12, 160.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 150.0, "minX": 2.0, "maxY": 196.0, "series": [{"data": [[2.0, 178.0], [3.0, 168.0], [4.0, 160.5], [5.0, 163.0], [6.0, 156.0], [7.0, 159.5], [8.0, 154.0], [9.0, 154.0], [10.0, 155.0], [11.0, 155.0], [12.0, 153.0], [13.0, 157.5], [14.0, 150.5], [15.0, 154.0], [16.0, 160.5], [17.0, 155.0], [18.0, 165.0], [19.0, 167.0], [20.0, 150.0], [21.0, 196.0], [22.0, 161.5], [23.0, 156.0], [24.0, 155.5], [25.0, 160.0], [26.0, 160.0], [27.0, 153.5], [28.0, 154.0], [29.0, 155.0], [31.0, 170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 150.0, "minX": 2.0, "maxY": 196.0, "series": [{"data": [[2.0, 177.5], [3.0, 167.0], [4.0, 160.5], [5.0, 163.0], [6.0, 156.0], [7.0, 159.5], [8.0, 153.5], [9.0, 154.0], [10.0, 155.0], [11.0, 155.0], [12.0, 153.0], [13.0, 157.0], [14.0, 150.5], [15.0, 153.0], [16.0, 160.5], [17.0, 155.0], [18.0, 165.0], [19.0, 167.0], [20.0, 150.0], [21.0, 196.0], [22.0, 161.5], [23.0, 156.0], [24.0, 155.5], [25.0, 160.0], [26.0, 160.0], [27.0, 153.5], [28.0, 153.5], [29.0, 155.0], [31.0, 170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.4166666666666665, "minX": 1.77170442E12, "maxY": 24.1, "series": [{"data": [[1.77170454E12, 24.1], [1.77170448E12, 15.816666666666666], [1.7717046E12, 9.816666666666666], [1.77170442E12, 3.4166666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717046E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.77170442E12, "maxY": 24.1, "series": [{"data": [[1.77170454E12, 24.1], [1.77170448E12, 15.766666666666667], [1.7717046E12, 9.9], [1.77170442E12, 3.3833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717046E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.77170442E12, "maxY": 24.1, "series": [{"data": [[1.77170454E12, 24.1], [1.77170448E12, 15.766666666666667], [1.7717046E12, 9.9], [1.77170442E12, 3.3833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717046E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.77170442E12, "maxY": 24.1, "series": [{"data": [[1.77170454E12, 24.1], [1.77170448E12, 15.766666666666667], [1.7717046E12, 9.9], [1.77170442E12, 3.3833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717046E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

