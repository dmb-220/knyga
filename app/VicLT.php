<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VicLT extends Model
{
    //curl issitraukiam duomenis is vic.lt pagal ukinko prisijungimo duomenis
    public function get_VIC($url, $post, $auth){
        $options = array(
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_HEADER         => false,    // don't return headers
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_ENCODING       => "",       // handle all encodings
            CURLOPT_USERAGENT      => "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:54.0) Gecko/20100101 Firefox/54.0", // who am i
            CURLOPT_AUTOREFERER    => true,     // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
            CURLOPT_TIMEOUT        => 120,      // timeout on response
            CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
            CURLOPT_SSL_VERIFYPEER => 0,        // Disabled SSL Cert checks
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_USERPWD        => $auth,
            CURLOPT_POSTFIELDS     => $post,
        );

        $ch      = curl_init( $url );
        curl_setopt_array( $ch, $options );
        //$info = curl_getinfo($ch);
        $content = curl_exec( $ch );
        $err     = curl_errno( $ch );
        $errmsg  = curl_error( $ch );
        $header  = curl_getinfo( $ch );
        curl_close( $ch );

        $header['errno']   = $err;
        $header['errmsg']  = $errmsg;
        $header['content'] = $content;
        return $header;
    }

    //parsinam duomenis ir HTMl failu apie gyvulius
    public function Visi_gyvunai($url){
        $dom = new DOMDocument();
        @$dom->loadHTML($url);
        $dom->preserveWhiteSpace = false;
        //the table by its tag name
        $tables = $dom->getElementsByTagName('table');
        //get all rows from the table
        $rows = $tables->item(0)->getElementsByTagName('tr');
        // get each column by tag name
        $cols = $rows->item(0)->getElementsByTagName('th');
        $row_headers = NULL;
        foreach ($cols as $node) {
            $row_headers[] = $node->nodeValue;
        }

        $table = array();
        //get all rows from the table
        $rows = $tables->item(7)->getElementsByTagName('tr');
        foreach ($rows as $row) {
            // get each column by tag name
            $cols = $row->getElementsByTagName('td');
            $row = array();
            $i=0;
            foreach ($cols as $node) {
                if($row_headers==NULL)
                    $row[] = $node->nodeValue;
                else
                    $row[$row_headers[$i]] = $node->nodeValue;
                $i++;
            }
            $table[] = $row;
        }
        return $table;
    }

    public function Gyvi_gyvunai($url){
        $dom = new DOMDocument();
        @$dom->loadHTML($url);
        $dom->preserveWhiteSpace = false;
        //the table by its tag name
        $tables = $dom->getElementsByTagName('table');
        //get all rows from the table
        $rows = $tables->item(0)->getElementsByTagName('tr');
        // get each column by tag name
        $cols = $rows->item(0)->getElementsByTagName('th');
        $row_headers = NULL;
        foreach ($cols as $node) {
            $row_headers[] = $node->nodeValue;
        }

        $table = array();
        //get all rows from the table
            $rows = $tables->item(8)->getElementsByTagName('tr');
            foreach ($rows as $row) {
                // get each column by tag name
                $cols = $row->getElementsByTagName('td');
                $row = array();
                $i = 0;
                foreach ($cols as $node) {
                    if ($row_headers == NULL)
                        $row[] = $node->nodeValue;
                    else
                        $row[$row_headers[$i]] = $node->nodeValue;
                    $i++;
                }
                $table[] = $row;
            }
        return $table;
    }
}
