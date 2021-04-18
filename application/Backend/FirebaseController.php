<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;
use Firebase\Auth\Token\Exception\InvalidToken;
use Kreait\Firebase\Exception\Auth\RevokedIdToken;

//Install kreait using composer => composer require kreait/firebase-php ^5.0

class FirebaseController extends Controller
{
    protected $auth, $database;

    public function __construct()
    {
        $factory = (new Factory)
            ->withServiceAccount(__DIR__ . '/cvgenerator-firebase-admin-sdk.json')
            ->withDatabaseUri('https://cvgenerator-19a0e-default-rtdb.firebaseio.com/');

        $this->auth = $factory->createAuth();
        $this->database = $factory->createDatabase();
    }

    public function signUp()
    {
    }

    public function signIn()
    {
        /*   $email = "akmalikhsan02@gmail.com";
        $pass = "akmal123";

        try {
            $signInResult = $this->auth->signInWithEmailAndPassword($email, $pass);
            Session::put('uid', $signInResult->data()["localId"]);
            Session::put('idTokenString', $signInResult->data()["idToken"]);
            Session::save();
            dump(Session::get('uid'));
            dump(Session::get('idTokenString'));
            dump($signInResult);
        } catch (\Throwable $e) {
            if ($e->getMessage() == "INVALID_PASSWORD") {
                dd("Invalid password");
            } elseif ($e->getMessage() == "EMAIL_NOT_FOUND") {
                dd("Email not found");
            }
        }*/
    }

    public function signOut()
    {
        /*   $this->auth->revokeRefreshTokens(Session::get('uid'));

        if ($this->userCheck() == "revoked") {
            Session::forget('uid');
            Session::forget('idTokenString');
            Session::save();
            dd("Successfully signed out");
        } else {
            dd("Sign out failed");
        }*/
    }

    public function userCheck()
    {
        /*   try {
            $verifiedIdToken = $this->auth->verifyIdToken(Session::get('idTokenString'), $checkIfRevoked = true);
            $response = "valid";
            // dd("Valid");
            // $uid = $verifiedIdToken->getClaim('sub');
            // $user = $auth->getUser($uid);
            // dump($uid);
            // dump($user);
        } catch (\InvalidArgumentException $e) {
            // dd('The token could not be parsed: '.$e->getMessage());
            $response = "The token could not be parsed: " . $e->getMessage();
        } catch (InvalidToken $e) {
            // dd('The token is invalid: '.$e->getMessage());
            $response = "The token is invalid: " . $e->getMessage();
        } catch (RevokedIdToken $e) {
            $response = "revoked";
        } catch (\Throwable $e) {
            if (substr($e->getMessage(), 0, 21) == "This token is expired") {
                $response = "expired";
            } else {
                $response = "something_wrong";
            }
        }

        return $response;*/
    }

    public function read()
    {
        // $ref = $this->database->getReference('users')->getSnapshot();
        // dump($ref);
        $ref = $this->database->getReference('users')->getValue();
        dump($ref);
        // $ref = $this->database->getReference('users')->getValue();
        // dump($ref);
        $ref = $this->database->getReference('users')->getSnapshot()->exists();
        dump($ref);
    }

    public function update()
    {
        // before
        $ref = $this->database->getReference('users/edukasi')->getValue();
        dump($ref);

        // update data
        $ref = $this->database->getReference('users/edukasi/list_edukasi')
            ->update(["instansi" => "Harvard University"]);

        // after
        $ref = $this->database->getReference('users/edukasi/list_edukasi')->getValue();
        dump($ref);
    }

    public function set()
    {
        // before
        $ref = $this->database->getReference('users')->getValue();
        dump($ref);

        // set data
        $ref = $this->database->getReference('users/customer')
            ->set([
                "job" => "pengangguran",
                "list_bahasa" => [
                    "level" => "N1",
                    "nama" => "bahasa jepang",
                    "py_class" => "bahasa.bahasa"
                ]
            ]);
        $ref = $this->database->getReference('users/edukasi')
            ->set([
                "list_edukasi" => [
                    "deskripsi" => "Ranking 1 paralel",
                    "instansi" => "SDIT Usamah",
                    "jenjang" => "Sekolah Dasar",
                    "py_class" => "edukasi.Edukasi",
                    "tahun_mulai" => 2006,
                    "tahun_selesai" => 2012
                ]
            ]);
        $ref = $this->database->getReference('users/kemampuan')
            ->set([
                "list_kemampuan" => [
                    "nama" => "Ngoding",
                    "py_class" => "kemampuan.Kemampuan"
                ]
            ]);
        $ref = $this->database->getReference('users/pengalaman')
            ->set([
                "list_pengalaman" => [
                    "deskripsi" => "Gagal magang, males nanyain kelanjutan jadwal magang ehe",
                    "instansi" => "Forstok",
                    "nama" => "Junior Software Engineer",
                    "py_class" => "pengalaman.Pengalaman",
                    "tahun_mulai" => 2021,
                    "tahun_selesai" => 2021
                ]
            ]);
        $ref = $this->database->getReference('users/penghargaan')
            ->set([
                "list_penghargaan" => [
                    "deskripsi" => "Lomba Competitive Programming tingkat Internasional",
                    "instansi" => "ACM",
                    "nama" => "Finalist ACM ICPC Asia Jakarta Regional 2020",
                    "py_class" => "penghargaan.Penghargaan",
                    "tahun" => 2020
                ]
            ]);
        $ref = $this->database->getReference('users/rujukan')
            ->set([
                "list_rujukan" => [
                    "email" => "elon@musk.com",
                    "instansi" => "Space Toon",
                    "nama" => "Elon Musk",
                    "no_hp" => "081269696969",
                    "py_class" => "rujukan.Rujukan"
                ]
            ]);
        $ref = $this->database->getReference('users/socialMedia')
            ->set([
                "list_socialMedia" => [
                    "link" => "https//www.linkedin.com/in/maaf72/",
                    "nama" => "Linkedin",
                    "py_class" => "sosial_media.SosialMedia"
                ]
            ]);
        $ref = $this->database->getReference('users/socialMedia')
            ->set([
                "list_socialMedia" => [
                    "linkedin" => [
                        "link" => "https//www.linkedin.com/in/maaf72/",
                        "nama" => "Linkedin",
                        "py_class" => "sosial_media.SosialMedia"
                    ],
                    "instagram" => [
                        "link" => "https://www.instagram.com/maaf72/",
                        "nama" => "Instagram",
                        "py_class" => "sosial_media.SosialMedia"
                    ],
                    "nama" => "Fatih",
                    "py_class" => "customer.Customer"
                ]
            ]);


        // after
        $ref = $this->database->getReference('users')->getValue();
        dump($ref);
    }

    public function delete()
    {
        // before
        $ref = $this->database->getReference('users')->getValue();
        dump($ref);

        /**
         * 1. remove()
         * 2. set(null)
         * 3. update(["key" => null])
         */

        // remove()
        $ref = $this->database->getReference('users/edukasi')->remove();

        // set(null)
        // $ref = $this->database->getReference('users/edukasi')
        //     ->set(null);

        // // update(["key" => null])
        // $ref = $this->database->getReference('users edukasi')
        //     ->update(["edukasi" => null]);

        // after
        $ref = $this->database->getReference('users/edukasi')->getValue();
        dump($ref);
    }
}
