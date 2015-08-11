'use strict';

angular.module('iso-3166-country-codes', [])
  .factory('ISO3166', function() {
    var holder = {};

    holder.codeToCountry = {
      'AF': 'Afghanistan',
      'AL': 'Albania',
      'DZ': 'Algeria',
      'AS': 'American Samoa',
      'AD': 'Andorra',
      'AO': 'Angola',
      'AI': 'Anguilla',
      'AQ': 'Antarctica',
      'AG': 'Antigua And Barbuda',
      'AR': 'Argentina',
      'AM': 'Armenia',
      'AW': 'Aruba',
      'AC': 'Ascension Island',
      'AU': 'Australia',
      'AT': 'Austria',
      'AZ': 'Azerbaijan',
      'BS': 'Bahamas',
      'BH': 'Bahrain',
      'BD': 'Bangladesh',
      'BB': 'Barbados',
      'BY': 'Belarus',
      'BE': 'Belgium',
      'BZ': 'Belize',
      'BJ': 'Benin',
      'BM': 'Bermuda',
      'BT': 'Bhutan',
      'BO': 'Bolivia, Plurinational State Of',
      'BQ': 'Bonaire, Saint Eustatius And Saba',
      'BA': 'Bosnia & Herzegovina',
      'BW': 'Botswana',
      'BV': 'Bouvet Island',
      'BR': 'Brazil',
      'IO': 'British Indian Ocean Territory',
      'BN': 'Brunei Darussalam',
      'BG': 'Bulgaria',
      'BF': 'Burkina Faso',
      'BI': 'Burundi',
      'CV': 'Cabo Verde',
      'KH': 'Cambodia',
      'CM': 'Cameroon',
      'CA': 'Canada',
      'IC': 'Canary Islands',
      'KY': 'Cayman Islands',
      'CF': 'Central African Republic',
      'EA': 'Ceuta, Mulilla',
      'TD': 'Chad',
      'CL': 'Chile',
      'CN': 'China',
      'CX': 'Christmas Island',
      'CP': 'Clipperton Island',
      'CC': 'Cocos (Keeling) Islands',
      'CO': 'Colombia',
      'KM': 'Comoros',
      'CK': 'Cook Islands',
      'CR': 'Costa Rica',
      'CI': 'Cote d\'Ivoire',
      'HR': 'Croatia',
      'CU': 'Cuba',
      'CW': 'Curacao',
      'CY': 'Cyprus',
      'CZ': 'Czech Republic',
      'CD': 'Democratic Republic Of Congo',
      'DK': 'Denmark',
      'DG': 'Diego Garcia',
      'DJ': 'Djibouti',
      'DM': 'Dominica',
      'DO': 'Dominican Republic',
      'EC': 'Ecuador',
      'EG': 'Egypt',
      'SV': 'El Salvador',
      'GQ': 'Equatorial Guinea',
      'ER': 'Eritrea',
      'EE': 'Estonia',
      'ET': 'Ethiopia',
      'EU': 'European Union',
      'FK': 'Falkland Islands',
      'FO': 'Faroe Islands',
      'FJ': 'Fiji',
      'FI': 'Finland',
      'FR': 'France',
      'FX': 'France, Metropolitan',
      'GF': 'French Guiana',
      'PF': 'French Polynesia',
      'TF': 'French Southern Territories',
      'GA': 'Gabon',
      'GM': 'Gambia',
      'GE': 'Georgia',
      'DE': 'Germany',
      'GH': 'Ghana',
      'GI': 'Gibraltar',
      'GR': 'Greece',
      'GL': 'Greenland',
      'GD': 'Grenada',
      'GP': 'Guadeloupe',
      'GU': 'Guam',
      'GT': 'Guatemala',
      'GG': 'Guernsey',
      'GN': 'Guinea',
      'GW': 'Guinea-bissau',
      'GY': 'Guyana',
      'HT': 'Haiti',
      'HM': 'Heard Island And McDonald Islands',
      'HN': 'Honduras',
      'HK': 'Hong Kong',
      'HU': 'Hungary',
      'IS': 'Iceland',
      'IN': 'India',
      'ID': 'Indonesia',
      'IR': 'Iran, Islamic Republic Of',
      'IQ': 'Iraq',
      'IE': 'Ireland',
      'IM': 'Isle Of Man',
      'IL': 'Israel',
      'IT': 'Italy',
      'JM': 'Jamaica',
      'JP': 'Japan',
      'JE': 'Jersey',
      'JO': 'Jordan',
      'KZ': 'Kazakhstan',
      'KE': 'Kenya',
      'KI': 'Kiribati',
      'KP': 'Korea, Democratic People\'s Republic Of',
      'KR': 'Korea, Republic Of',
      'KW': 'Kuwait',
      'KG': 'Kyrgyzstan',
      'LA': 'Lao People\'s Democratic Republic',
      'LV': 'Latvia',
      'LB': 'Lebanon',
      'LS': 'Lesotho',
      'LR': 'Liberia',
      'LY': 'Libya',
      'LI': 'Liechtenstein',
      'LT': 'Lithuania',
      'LU': 'Luxembourg',
      'MO': 'Macao',
      'MK': 'Macedonia, The Former Yugoslav Republic Of',
      'MG': 'Madagascar',
      'MW': 'Malawi',
      'MY': 'Malaysia',
      'MV': 'Maldives',
      'ML': 'Mali',
      'MT': 'Malta',
      'MH': 'Marshall Islands',
      'MQ': 'Martinique',
      'MR': 'Mauritania',
      'MU': 'Mauritius',
      'YT': 'Mayotte',
      'MX': 'Mexico',
      'FM': 'Micronesia, Federated States Of',
      'MD': 'Moldova',
      'MC': 'Monaco',
      'MN': 'Mongolia',
      'ME': 'Montenegro',
      'MS': 'Montserrat',
      'MA': 'Morocco',
      'MZ': 'Mozambique',
      'MM': 'Myanmar',
      'NA': 'Namibia',
      'NR': 'Nauru',
      'NP': 'Nepal',
      'NL': 'Netherlands',
      'NC': 'New Caledonia',
      'NZ': 'New Zealand',
      'NI': 'Nicaragua',
      'NE': 'Niger',
      'NG': 'Nigeria',
      'NU': 'Niue',
      'NF': 'Norfolk Island',
      'MP': 'Northern Mariana Islands',
      'NO': 'Norway',
      'OM': 'Oman',
      'PK': 'Pakistan',
      'PW': 'Palau',
      'PS': 'Palestinian Territory, Occupied',
      'PA': 'Panama',
      'PG': 'Papua New Guinea',
      'PY': 'Paraguay',
      'PE': 'Peru',
      'PH': 'Philippines',
      'PN': 'Pitcairn',
      'PL': 'Poland',
      'PT': 'Portugal',
      'PR': 'Puerto Rico',
      'QA': 'Qatar',
      'CG': 'Republic Of Congo',
      'RE': 'Reunion',
      'RO': 'Romania',
      'RU': 'Russian Federation',
      'RW': 'Rwanda',
      'BL': 'Saint Barthélemy',
      'SH': 'Saint Helena, Ascension And Tristan Da Cunha',
      'KN': 'Saint Kitts And Nevis',
      'LC': 'Saint Lucia',
      'MF': 'Saint Martin',
      'PM': 'Saint Pierre And Miquelon',
      'VC': 'Saint Vincent And The Grenadines',
      'WS': 'Samoa',
      'SM': 'San Marino',
      'SA': 'Saudi Arabia',
      'SN': 'Senegal',
      'RS': 'Serbia',
      'SC': 'Seychelles',
      'SL': 'Sierra Leone',
      'SG': 'Singapore',
      'SX': 'Sint Maarten',
      'SK': 'Slovakia',
      'SI': 'Slovenia',
      'SB': 'Solomon Islands',
      'SO': 'Somalia',
      'ZA': 'South Africa',
      'GS': 'South Georgia And The South Sandwich Islands',
      'SS': 'South Sudan',
      'ES': 'Spain',
      'LK': 'Sri Lanka',
      'SD': 'Sudan',
      'SR': 'Suriname',
      'SJ': 'Svalbard And Jan Mayen',
      'SZ': 'Swaziland',
      'SE': 'Sweden',
      'CH': 'Switzerland',
      'SY': 'Syrian Arab Republic',
      'ST': 'São Tomé and Príncipe',
      'TW': 'Taiwan',
      'TJ': 'Tajikistan',
      'TZ': 'Tanzania, United Republic Of',
      'TH': 'Thailand',
      'TL': 'Timor-Leste, Democratic Republic of',
      'TG': 'Togo',
      'TK': 'Tokelau',
      'TO': 'Tonga',
      'TT': 'Trinidad And Tobago',
      'TA': 'Tristan de Cunha',
      'TN': 'Tunisia',
      'TR': 'Turkey',
      'TM': 'Turkmenistan',
      'TC': 'Turks And Caicos Islands',
      'TV': 'Tuvalu',
      'UG': 'Uganda',
      'UA': 'Ukraine',
      'AE': 'United Arab Emirates',
      'GB': 'United Kingdom',
      'UK': 'United Kingdom',
      'US': 'United States',
      'UM': 'United States Minor Outlying Islands',
      'UY': 'Uruguay',
      'SU': 'USSR',
      'UZ': 'Uzbekistan',
      'VU': 'Vanuatu',
      'VA': 'Vatican City State',
      'VE': 'Venezuela, Bolivarian Republic Of',
      'VN': 'Viet Nam',
      'VG': 'Virgin Islands (British)',
      'VI': 'Virgin Islands (US)',
      'WF': 'Wallis And Futuna',
      'EH': 'Western Sahara',
      'YE': 'Yemen',
      'ZM': 'Zambia',
      'ZW': 'Zimbabwe',
      'AX': 'Åland Islands'
    };

    holder.countryToCode = {};

    for(var key in holder.codeToCountry) {
      holder.countryToCode[holder.codeToCountry[key]] = key;
    }

    holder.isCountryCode = function(input) {
      if (angular.isString(input)) {
        input = input.toUpperCase();
      }
      return angular.isDefined(this.codeToCountry[input]);
    };

    holder.getCountryCode = function(countryName, manipulator) {
      var countryCode = this.countryToCode[countryName.toUpperCase()];
      manipulator = manipulator ? manipulator : 'toUpperCase';

      return countryCode && countryCode[manipulator]();
    };

    holder.getCountryName = function(countryCode, manipulator) {
      manipulator = manipulator ? manipulator : 'toUpperCase';

      return this.codeToCountry[countryCode] && this.codeToCountry[countryCode][manipulator]();
    };

    holder.getCountryNames = function(countryCodes, manipulator) {
      manipulator = manipulator ? manipulator : 'toUpperCase';

      var countries = {};
      angular.forEach(countryCodes, function(key) {
        if (holder.isCountryCode(key)) {
          countries[key] = holder.getCountryName(key, manipulator);
        }
      });
      return countries;
    };

    return holder;
  })
  .filter('isoCountry', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryName(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .filter('isoCountryCode', ['ISO3166', function(ISO3166){
    return function (input) {
      var result = ISO3166.getCountryCode(input);
      return angular.isUndefined(result) ? input : result;
    };
  }])
  .directive('countryCode', ['ISO3166', function(ISO3166) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if(ISO3166.isCountryCode(viewValue)) {
            ctrl.$setValidity('countrycode', true);
            return viewValue;
          } else {
            ctrl.$setValidity('countrycode', false);
            return undefined;
          }
        });
      }
    };
  }]);
